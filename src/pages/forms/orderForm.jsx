import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../lib/axiosClient";

const UserForm = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const cNameRef = useRef();
  const cEmailRef = useRef();
  const cPhoneRef = useRef();
  const cStreetRef = useRef();
  const cCityRef = useRef();
  const cStateRef = useRef();
  const cZipCodeRef = useRef();
  const cCountryRef = useRef();
  const amountRef = useRef();
  const pNameRef = useRef();
  const pDetailsRef = useRef();

  // Submit order
  const onSubmit = async (ev) => {
    ev.preventDefault();
    const payload = {
      customerName: cNameRef.current.value,
      customerEmail: cEmailRef.current.value,
      customerPhone: cPhoneRef.current.value,
      customerStreet: cStreetRef.current.value,
      customerCity: cCityRef.current.value,
      customerState: cStateRef.current.value,
      customerZipCode: cZipCodeRef.current.value,
      customerCountry: cCountryRef.current.value,
      amount: amountRef.current.value,
      productName: pNameRef.current.value,
      productDetails: pDetailsRef.current.value,
    };
    setLoading(true);
    await axiosClient
      .post("/orders/create", payload)
      .then((res) => {
        console.log(res);
        navigate(`/orders/invoice/${res.data.data.invoice_id}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="p-6 bg-gray-200 h-fit rounded md:w-1/2 sm:w-2/3">
        <h1 className="text-2xl mb-4">New Order</h1>
        {loading && <div className="text-center">Loading...</div>}

        {!loading && (
          <form onSubmit={onSubmit} className="flex flex-col gap-y-3">
            <label>Customer/Billing Information</label>
            <div className="flex gap-2">
              <input
                required
                ref={cNameRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer Name"
              ></input>

              <input
                required
                ref={cEmailRef}
                type="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer Email"
              ></input>
            </div>

            <div className="flex gap-2">
              <input
                required
                ref={cPhoneRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer Phone"
              ></input>

              <input
                required
                ref={cStreetRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer Street"
              ></input>
            </div>

            <div className="flex gap-2">
              <input
                required
                ref={cCityRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer City"
              ></input>

              <input
                required
                ref={cStateRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer State"
              ></input>
            </div>

            <div className="flex gap-2">
              <input
                required
                ref={cZipCodeRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer Zip Code"
              ></input>

              <input
                required
                ref={cCountryRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Customer Country e.g. BD"
              ></input>
            </div>

            {/* <label>Amount</label> */}
            <label>Product Information</label>

            <div className="flex gap-2">
              <input
                required
                ref={pNameRef}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Product Name"
              ></input>
              <input
                required
                ref={amountRef}
                type="number"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                placeholder="Amount"
              ></input>
            </div>

            <textarea
              required
              ref={pDetailsRef}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              placeholder="Product Details"
            ></textarea>

            <button className="bg-blue-500 p-2 rounded text-white w-full">
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserForm;
