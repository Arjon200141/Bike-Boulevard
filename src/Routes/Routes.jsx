
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Bikes from "../Pages/Bikes/Bikes";
import Accessories from "../Pages/Accessories/Accessories";

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
            }
        ]
    },
]);
