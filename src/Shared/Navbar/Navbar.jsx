import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const [isAdmin] = useAdmin();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error.message);
            });
    };

    const navlinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Blogs</a></li>
            <li><Link to="/bikes">Bikes</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
        </>
    );

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
                    <Link to="/" className="text-xl flex gap-2 items-center">
                        <img src="https://i.ibb.co/3RnM74k/view-motorcycle-garage-warehouse-23-2150704669.jpg" alt="" className="h-14 rounded-md w-20" />
                        <span className="text-4xl font-semibold">Bike Boulevard</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {user ? (
                        <div className="flex items-center">
                            <img src={user.photoURL} alt={user.displayName} className="h-12 w-12 rounded-full mr-3 border-2 border-black" />
                            <button onClick={handleLogOut} className="btn px-6 text-2xl py-1 bg-lime-200 font-semibold">Log Out</button>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <Link to="/register">
                                <button className="btn bg-gradient-to-r from-violet-100 to-violet-200 shadow-xl text-2xl font-semibold px-6 h-10">Register</button>
                            </Link>
                            <Link to="/login">
                                <button className="btn bg-gradient-to-r from-sky-200 to-sky-300 shadow-xl text-2xl font-semibold px-6 h-10">Log In</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
