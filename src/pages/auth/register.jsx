import { useRef } from "react";
import axiosClient from "../../lib/axiosClient";
import { useStateContext } from "../../contexts/contextProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext();
  const submit = (e) => {
    e.preventDefault();
    const payload = {
      userName: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/auth/register", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const errResponse = err.response;
        if (errResponse && errResponse.status === 422) {
          console.log(errResponse.data.error);
        }
      });
  };
  return (
    <div className="px-48 mt-20 flex justify-center ">
      <div className="w-[480px] p-4 shadow-md bg-gray-200 rounded">
        <form onSubmit={submit} className="flex flex-col gap-y-4 ">
          <h2 className="text-2xl font-semibold text-center">
            Create a new account
          </h2>
          <input
            ref={nameRef}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            placeholder="Name"
          ></input>
          <input
            ref={emailRef}
            type="email"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            placeholder="Email"
          ></input>
          <input
            ref={passwordRef}
            type="password"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            placeholder="Password"
          ></input>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link className="text-blue-800 font-semibold" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
