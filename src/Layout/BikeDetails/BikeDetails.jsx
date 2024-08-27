import { Link, useLoaderData } from "react-router-dom";

const BikeDetails = () => {
    const bike = useLoaderData();
    console.log(bike);
    return (
        <div className="hero bg-lime-50/35 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-1">
                    <img
                        src={bike.image}
                        className="rounded-lg shadow-2xl h-96 my-6" />
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-1">
                    <h1 className="text-5xl font-bold mb-5">{bike.name}</h1>
                    <h2 className="text-2xl"><span className="font-semibold">Company : </span>{bike.company}</h2>
                    <div className="divider"></div>
                    <p className="py-6 texl-xl">
                        {bike.description}
                    </p>
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between mr-16">
                            <p className="text-xl"><span className="font-semibold">Release Date : </span>{bike.release_date}</p>
                            <p className="text-xl"><span className="font-semibold">Rating : </span>{bike.rating}</p>
                        </div>
                        <div className="flex justify-between mr-16">
                            <p className="text-xl"><span className="font-semibold">Warranty : </span>{bike.warranty}</p>
                            <p className="text-xl"><span className="font-semibold">Price : </span>{bike.price}</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-10 mr-2">
                        <button className="btn w-72 text-2xl font-semibold bg-pink-200">Add to Cart</button>
                        <Link to="/">
                            <button className="btn w-72 text-2xl font-semibold bg-sky-300">Back to Homepage</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;
