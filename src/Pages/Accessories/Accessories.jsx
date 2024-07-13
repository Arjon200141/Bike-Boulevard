import { useEffect, useState } from "react";
import { IoPricetagsSharp } from "react-icons/io5";

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('accessories.json')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredAccessories = accessories.filter(accessory =>
        accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                                        <button className="btn text-xl font-semibold bg-cyan-200 w-full">Add to Cart</button>
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
