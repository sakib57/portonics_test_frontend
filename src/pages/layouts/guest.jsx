import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";
const GuestLayout = () => {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <header className="flex justify-center items-center h-12 shadow-md w-full">
        <div className="flex items-center justify-between w-[1280px] px-12">
          <div>Logo</div>
          <div className="flex gap-3">
            <Link
              className="bg-slate-200 rounded px-3 py-1 hover:bg-slate-300"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="bg-slate-200 rounded px-3 py-1 hover:bg-slate-300"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
