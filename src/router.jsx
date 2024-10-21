import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DefaultLayout from "./pages/layouts/default";
import GuestLayout from "./pages/layouts/guest";
import Orders from "./pages/orders/orders";
import OrderForm from "./pages/forms/orderForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/orders/create",
                element: <OrderForm key="OrderCreate" />,
            },
            {
                path: "/orders/:id",
                element: <OrderForm key="OrderUpdate"/>,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    }
]);

export default router;