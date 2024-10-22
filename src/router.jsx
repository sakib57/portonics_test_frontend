import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DefaultLayout from "./pages/layouts/default";
import GuestLayout from "./pages/layouts/guest";
import Orders from "./pages/orders/orders";
import OrderForm from "./pages/forms/orderForm";
import OrderInvoice from "./pages/orders/invoice";
import OrderSuccess from "./pages/orders/success";

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
                element: <OrderForm />,
            },
            {
                path: "/orders/success",
                element: <OrderSuccess />,
            },
            {
                path: "/orders/invoice/:id",
                element: <OrderInvoice />,
            },
            {
                path: "/orders/:id",
                element: <OrderForm />,
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