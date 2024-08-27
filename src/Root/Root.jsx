import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-lime-100 dancing-script ">
            <Navbar></Navbar>
            <div className="divider"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;