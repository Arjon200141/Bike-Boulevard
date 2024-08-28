
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
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import About from "../Pages/About";
import Customers from "../Pages/Customers";
import AdminRoutes from "./AdminRoutes";
import Products from "../Pages/Products";
import Orders from "../Pages/Orders";

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
                path: "/bikes/:bikeId",
                element: <BikeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/bikes/${params.bikeId}`),
            },            
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/users",
                element:<AdminRoutes><Customers></Customers></AdminRoutes>,
            },
            {
                path:"/products",
                element:<AdminRoutes><Products></Products></AdminRoutes>
            },
            {
                path:"/orders",
                element:<AdminRoutes><Orders></Orders></AdminRoutes>
            }
        ]
    },
]);
