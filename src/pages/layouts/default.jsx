import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";
import { useEffect } from "react";
import axiosClient from "../../lib/axiosClient";
const DefaultLayout = () => {
  const { user, setUser, token, setToken } = useStateContext();

  useEffect(() => {
    axiosClient.get("/users/find-with-token").then(({ data }) => {
      setUser(data);
    });
  }, []);

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  const onLogout = (e) => {
    e.preventDefault();
    setUser(null);
    setToken(null);
  };
  console.log(user);
  return (
    <div>
      <header className="flex justify-center items-center h-12 shadow-md w-full">
        <div className="flex items-center justify-between w-[1280px] px-12">
          <div>
            <Link to={"/"}>Logo</Link>
          </div>
          <div className="flex items-center gap-3">
            <h2>{user.userName}</h2>
            <button
              onClick={onLogout}
              className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="flex gap-3">
          <div className="w-48 h-screen bg-gray-200 px-2 ">
            <div className="mt-4 flex flex-col gap-y-1">
              <Link
                className="px-2 py-1 w-full bg-blue-500 text-white rounded"
                to={"/orders"}
              >
                Orders
              </Link>
            </div>
          </div>
            <Outlet/>
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
