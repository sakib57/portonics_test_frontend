import { useEffect, useState } from "react";
import axiosClient from "../../lib/axiosClient";
import { useParams } from "react-router-dom";

const OrderInvoice = () => {
  const [invoice, setInvoice] = useState(null);
  const { id } = useParams();

  // Get invoice with id
  useEffect(() => {
    axiosClient.post("/orders/invoice", { invoiceId: id }).then(({ data }) => {
      console.log("Invoice: ", data);
      setInvoice(data.data.data);
    });
  }, []);

  // Copy link to clipboard
  function copyPaymentLink() {
    const copyText = document.getElementById("paymentLink").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Copied the link: " + copyText);
  }


  return (
    <div className="w-full flex justify-center">
      {invoice && (
        <div className="w-full bg-blue-50 h-fit mt-10 rounded p-4">
          <h4 className="mb-2 font-semibold">Payment Link</h4>
          <div className="flex gap-2 items-center">
            <p
              id="paymentLink"
              className="px-2 py-1 bg-white rounded"
            >{`https://payment-sandbox.portwallet.com/payment/?invoice=${invoice.invoice_id}`}</p>
            <button
              className="bg-blue-600 text-white px-2 py-1 rounded"
              type="button"
              onClick={copyPaymentLink}
            >
              Copy
            </button>
          </div>

          <h4 className="mb-2 mt-4 font-semibold">Customer Info</h4>
          <div className="flex gap-3 items-center">
            <p>Name: </p>
            <p>{invoice.billing.customer.name}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Email: </p>
            <p>{invoice.billing.customer.email}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Phone: </p>
            <p>{invoice.billing.customer.phone}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Address: </p>
            <p>
              {invoice.billing.customer.address.street +
                ", " +
                invoice.billing.customer.address.city +
                ", " +
                invoice.billing.customer.address.state}
            </p>
          </div>
          <h4 className="mb-2 mt-4 font-semibold">Product Info</h4>
          <div className="flex gap-3 items-center">
            <p>Product Name: </p>
            <p>{invoice.product.name}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Product Description: </p>
            <p>{invoice.product.description}</p>
          </div>

          <h4 className="mb-2 mt-4 font-semibold">Order Details</h4>
          <div className="flex gap-3 items-center">
            <p>Amount: </p>
            <p>{invoice.order.amount}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Currency: </p>
            <p>{invoice.order.currency}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Status: </p>
            <p>{invoice.order.status}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p>Type: </p>
            <p>{invoice.order.type}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInvoice;
