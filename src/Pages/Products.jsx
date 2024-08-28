import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {
    const axiosSecure = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Fetch Bikes Data
    const { data: bikes = [], refetch } = useQuery({
        queryKey: ["bikes"],
        queryFn: async () => {
            const res = await axiosSecure.get("/bikes");
            return res.data;
        },
    });

    // Fetch Accessories Data
    const { data: accessories = [] } = useQuery({
        queryKey: ["accessories"],
        queryFn: async () => {
            const res = await axiosSecure.get("/accessories");
            return res.data;
        },
    });

    // Combine both lists
    const combinedProducts = [...bikes, ...accessories];

    // Calculate pagination
    const totalItems = combinedProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = combinedProducts.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handleDelete = (id, type) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/${type}/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Product has been deleted.",
                                icon: "success",
                            });
                            refetch(); // Refresh products after deletion
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting product:", error);
                        Swal.fire("Error", "Failed to delete the product.", "error");
                    });
            }
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="flex justify-center mb-12">
                <h2 className="text-center py-3 text-5xl font-semibold">
                    MANAGE PRODUCTS
                </h2>
            </div>
            <div>
                <h2 className="text-3xl ml-10 font-semibold mb-8">
                    Total Products: {totalItems}
                </h2>
                <div className="overflow-x-auto mx-10">
                    <table className="table table-lg">
                        <thead>
                            <tr className="text-xl bg-green-200 text-black">
                                <th>Sl No.</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Company Name</th>
                                <th>Price</th>
                                <th className="ml-7">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedProducts.map((product, index) => (
                                <tr key={product._id}>
                                    <td>
                                        <h2 className="text-xl">
                                            {startIndex + index + 1}
                                        </h2>
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-20 w-24">
                                                    <img src={product.image} alt="Product Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg">{product.name}</td>
                                    <td className="text-lg">{product.company}</td>
                                    <td className="text-lg">{product.price} $</td>
                                    <td className="flex justify-between gap-4 items-center mt-4">
                                        <Link to={`/updateproduct/${product._id}`}>
                                            <button className="btn btn-ghost btn-md bg-yellow-400 font-bold text-white text-xl">
                                                <CiEdit />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product._id, product.type)}
                                            className="btn btn-ghost btn-md bg-red-500 font-bold text-xl text-white"
                                        >
                                            <MdDeleteForever />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 mx-1 mb-6 ${currentPage === index + 1
                                    ? "bg-blue-500 text-white font-semibold"
                                    : "bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
