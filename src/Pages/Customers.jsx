import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Customers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center">All Users</h2>
            <div>
                <div className="overflow-x-auto mx-12">
                    <table className="table my-8 ">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl bg-lime-300 text-black">
                                <th>Sl No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item, index) => <tr key={item._id} className="text-xl">
                                    <th className="text-xl">{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask flex items-center mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.role == 'admin' ? 'Admin' :
                                            <div className="flex justify-center items-center">
                                                <button className="text-2xl"><FaUsers /></button>
                                            </div>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;