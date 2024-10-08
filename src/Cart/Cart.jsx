import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>MY CART</h2>
            </div>
            <div className="flex justify-between mx-8">
                <h2 className="text-3xl font-semibold text-black">Total Order : {cart.length}</h2>
                <h2 className="text-3xl font-semibold text-black">Total Price : {totalPrice} $</h2>
                {cart.length ? <Link to="/dashboard/payment">
                <button className="bg-sky-300 font-semibold text-2xl btn px-8">Pay</button>
                </Link>:
                <button disabled className="bg-sky-300 font-semibold text-2xl btn px-8">Pay</button>
                }
            </div>


            <div>
                <div className="overflow-x-auto my-12 mx-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl bg-sky-100 text-black">
                                <th>Sl No.</th>
                                <th>Bike Image</th>
                                <th>Bike Name</th>
                                <th>Company Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id} className="text-xl">
                                    <th>
                                        <h2 className="text-xl">{index + 1}</h2>
                                    </th>
                                    <td>
                                        <div className="flex items-center justify-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-20 w-24 -ml-20">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" className="flex justify-center"/>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="ml-4">{item.name}</td>
                                    <td className="ml-4">{item.company}</td>
                                    <td className="ml-4">{item.price} $</td>
                                    <div className="flex justify-center mt-8 ">
                                        <button onClick={() => handleDelete(item._id)}><MdDeleteForever /></button>
                                    </div>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;