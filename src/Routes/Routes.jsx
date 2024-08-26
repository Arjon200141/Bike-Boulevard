
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Bikes from "../Pages/Bikes/Bikes";
import Accessories from "../Pages/Accessories/Accessories";
import BikeDetails from "../Layout/BikeDetails/BikeDetails";
import LogIn from "../Providers/AuthProviders/LogIn";
import Register from "../Providers/AuthProviders/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/bikes",
                element:<Bikes></Bikes>
            },
            {
                path:"/accessories",
                element:<Accessories></Accessories>
            },
            {
                path:"/bikes/:id",
                element:<BikeDetails></BikeDetails>,
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
]);
