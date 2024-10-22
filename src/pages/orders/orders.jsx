import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../lib/axiosClient";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  
  // Getting order list
  useEffect(() => {
    axiosClient.get("/orders").then(({ data }) => {
      setOrders(data.data);
    });
  }, []);


  return (
    <div className="mt-2 w-full pr-3">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Order List</h2>
        <Link
          to={"/orders/create"}
          className="px-2 py-1 bg-blue-500 rounded text-white"
        >
          + Create Order
        </Link>
      </div>

      <table className="w-full mt-10">
        <tr className="bg-blue-100 ">
          <td className="p-2">
            <p>Invoice Id</p>
          </td>
          <td>
            <p>Customer Name</p>
          </td>
          <td>
            <p>Customer Phone</p>
          </td>
          <td>
            <p>Product Name</p>
          </td>
          <td>
            <p>Status</p>
          </td>
          <td>
            <p>Actions</p>
          </td>
        </tr>

        {orders.length > 0 &&
          orders.map((order, index) => {
            return (
              <tr key={index} className=" bg-gray-50 border">
                <td className="p-2">
                  <p>{order.invoiceId}</p>
                </td>
                <td>
                  <p>{order.customerName}</p>
                </td>
                <td>
                  <p>{order.customerPhone}</p>
                </td>
                <td>
                  <p>{order.productName}</p>
                </td>
                <td>
                  <p>{order.paymentStatus}</p>
                </td>
                <td>
                  <div className="flex items-center">
                    <Link className="px-2 bg-gray-500 text-white rounded" to={`/orders/invoice/${order.invoiceId}`}>Invoice</Link>
                  </div>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Orders;
