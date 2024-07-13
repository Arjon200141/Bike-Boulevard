import { useState, useEffect } from "react";
import { IoPricetagsSharp } from "react-icons/io5";

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [selectedCompany, setSelectedCompany] = useState("");

    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (e) => {
        setSortOrder(e.target.value);
    };

    const handleFilter = (e) => {
        setSelectedCompany(e.target.value);
    };

    const filteredBikes = bikes
        .filter(bike =>
            bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bike.company.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(bike =>
            selectedCompany === "" || bike.company === selectedCompany
        )
        .sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );

    return (
        <div className="mx-12 my-16">
            <div>
                <h2 className="text-5xl font-semibold text-center mb-12">Explore Our Bike Collection</h2>
            </div>
            <div className="flex gap-12 justify-center items-center mb-8">
                <input
                    type="text"
                    placeholder="Search by bike or company name"
                    className="input input-bordered w-full max-w-xs text-lg px-6 relative"
                    value={searchTerm}
                    onChange={handleSearch}
                />

                <select
                    className="select select-bordered max-w-xs text-lg px-6"
                    value={sortOrder}
                    onChange={handleSort}
                >
                    <option value="asc">Sort by Price: Low to High</option>
                    <option value="desc">Sort by Price: High to Low</option>
                </select>
                <select
                    className="select select-bordered max-w-xs px-6 text-lg"
                    value={selectedCompany}
                    onChange={handleFilter}
                >
                    <option value="">All Companies</option>
                    <option value="Kawasaki">Kawasaki</option>
                    <option value="BMW">BMW</option>
                    <option value="Yamaha">Yamaha</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="KTM">KTM</option>
                    <option value="Bajaj">Bajaj</option>
                    <option value="Apache">Apache</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {filteredBikes.map(bike => (
                    <div key={bike.id}>
                        <div className="card h-[550px] bg-white/25 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                    alt="Bike" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{bike.name}</h2>
                                <p>{bike.description}</p>
                                <div className="flex text-lg gap-16">
                                    <h2><span className="font-semibold">Warranty : </span>{bike.warranty}</h2>
                                    <h2 className="flex items-center gap-3"><IoPricetagsSharp />{bike.price} $</h2>
                                </div>
                                <div className="card-actions flex justify-center">
                                    <button className="btn text-xl font-semibold bg-gradient-to-r from-green-400 to-green-300 flex-1">View Details</button>
                                    <button className="btn text-xl font-semibold bg-gradient-to-r from-sky-400 to-sky-300 flex-1">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bikes;
