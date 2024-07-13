import { Link } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
        <Link to="/"><li><a>Home</a></li></Link>
        <li><a>Blogs</a></li>
        <Link to="/bikes"><li><a>Bikes</a></li></Link>
        <Link to="/accessories"><li><a>Accessories</a></li></Link>
        <li><a>About</a></li>
    </>
    return (
        <div className="bg-lime-200">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="text-xl flex gap-2 items-center"><img src="https://i.ibb.co/3RnM74k/view-motorcycle-garage-warehouse-23-2150704669.jpg" alt="" className="h-14 rounded-md w-20" /><span className="text-4xl font-semibold">Bike Boulevard</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn bg-violet-300 shadow-xl text-2xl font-semibold px-6 h-10">Register</a>
                    <a className="btn bg-sky-300 shadow-xl text-2xl font-semibold px-6 h-10">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;