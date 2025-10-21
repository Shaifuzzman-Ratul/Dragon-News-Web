import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import MainHome from "../Components/HomeLayout/MainHome";
import CatagoryNewa from "../pages/Catagories";
import Catagories from "../pages/Catagories";
import CatagoryNews from "../pages/CatagoryNews";
import AuthLayOut from "../Layout/AuthLayout/AuthLayOut";
import Login from "../pages/Login";
import Register from "../pages/Register";
import newsDetails from "../pages/newsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: < Home />,
        children: [
            {
                path: "",
                element: <MainHome></MainHome>

            },
            {
                path: "/catagory/:id",
                element: <CatagoryNews></CatagoryNews>,
                loader: () => fetch("/news.json"),
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },

    {
        path: "/newsDetails/:id",
        Component: newsDetails,
    },
    {
        path: "/*",
        element: <h1>error-404</h1>
    },
])
export default router;