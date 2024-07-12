import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className="">
                <div className="divider divider-success my-0 py-0"></div>
            </div>
            <div className="bg-lime-200">

                <footer className="footer bg-white/30 text-black p-10">
                    <aside>
                        <div className="flex gap-4 items-center">
                            <img src="https://i.ibb.co/3RnM74k/view-motorcycle-garage-warehouse-23-2150704669.jpg" alt="" className="h-20 w-20" />
                            <h2 className="text-4xl font-semibold">Bike Boulevard</h2>
                        </div>
                        <p>
                            <p className="flex items-center gap-2 text-md"><IoCall /> +880 1234 456 323</p>
                            <p className="flex items-center gap-2 text-md"><MdEmail />bikeboulevard2@gmail.com</p>
                            <p className="flex items-center gap-2 text-md"><IoLocation />123 Gulshan Avenue , Badda , <br />Dhaka-1213 , Bangladesh</p>
                        </p>
                    </aside>
                    <nav className="text-lg flex flex-col mt-3">
                        <h6 className="footer-title text-2xl">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav className=" md:mx-0">
                        <h2 className="footer-title pt-8 text-center text-black border-b-2 border-gray-500 w-full pb-4 text-2xl">Social</h2>

                        <div className="grid grid-flow-col gap-2 md:gap-12">
                            <a><img src="https://i.ibb.co/GTL1Rfz/twitter-1.png" alt="" className="h-8 w-8" /></a>
                            <a><img src="https://i.ibb.co/dbvX6Fr/instagram-icon-1057-2227.jpg" alt="" className="h-8 w-8" /></a>
                            <a><img src="https://i.ibb.co/181L2mT/facebook-icon-488108-2.jpg" alt="" className="h-8 w-8" /></a>
                            <a><img src="https://i.ibb.co/hKQbH1J/3d-icon-social-media-app-23-2150049587.jpg" alt="" className="h-8 w-8" /></a>
                            <a><img src="https://i.ibb.co/fHBG2jM/github.png" alt="" className="h-8 w-8" /></a>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;