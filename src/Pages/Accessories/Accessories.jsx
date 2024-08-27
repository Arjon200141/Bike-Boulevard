import { useContext, useEffect, useState } from "react";
import { IoPricetagsSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const {user} = useContext(AuthContext);
    const axiosSecure= useAxiosSecure();
    const [, refetch] = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/accessories')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredAccessories = accessories.filter(accessory =>
        accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddtoCart = bike => {
        if (user && user.email) {
            console.log(user.email, bike);
            const cartItem = {
                cartId: bike._id,
                email: user.email,
                name:bike.name,
                price:bike.price_usd,
                image:bike.image,
                company:bike.company
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${bike.name} is Added to the Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Want to Add Cart?",
                text: "You have to Log in to Add Products to the Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="mx-12 my-16">
            <div>
                <h2 className="text-5xl font-semibold text-center mb-4">Our Accessories</h2>
                <p className="text-lg text-center mx-16 mb-12">Discover a curated selection of high-quality motorbike accessories designed to enhance your riding experience. From helmets to handlebar grips, find everything you need for safety, comfort, and style.</p>
                <div className="flex justify-center items-center gap-6 mb-8">
                    <h2 className="text-2xl">Search Your Desired Product : </h2>
                    <input 
                        type="text" 
                        placeholder="Search by product name" 
                        className="input input-bordered w-full max-w-md"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    filteredAccessories.map(accessory =>
                        <div key={accessory.id}>
                            <div className="card bg-white/40 h-[550px] shadow-xl">
                                <figure>
                                    <img
                                        src={accessory.image}
                                        alt="Accessory" className="h-[300px] w-[375px]"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl font-semibold">{accessory.name}</h2>
                                    <h2 className="text-2xl "><span className="font-semibold">Company : </span>{accessory.company}</h2>
                                    <p className="text-lg">{accessory.details}</p>
                                    <div className="flex gap-12">
                                        <p className="text-lg"><span className="font-semibold">Warranty : </span>{accessory.warranty}</p>
                                        <h2 className="flex text-lg items-center gap-3"><IoPricetagsSharp />{accessory.price_usd} $</h2>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleAddtoCart(accessory)} className="btn text-xl font-semibold bg-cyan-200 w-full">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Accessories;
