import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import MainHome from "../Components/HomeLayout/MainHome";
import CatagoryNewa from "../pages/Catagories";
import Catagories from "../pages/Catagories";
import CatagoryNews from "../pages/CatagoryNews";

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
        element: <h1>this is auth</h1>
    },
    {
        path: "/news",
        element: <h1>this is news</h1>
    },
    {
        path: "/*",
        element: <h1>error-404</h1>
    },
])
export default router;