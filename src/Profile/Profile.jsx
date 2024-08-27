import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import useCart from "../hooks/useCart";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [cart] = useCart();
    return (
        <div>
            <h2 className="text-4xl text-center mb-8 font-semibold">Your Profile</h2>
            <div className="flex justify-center items-center">
                <img src={user.photoURL} alt="" className="h-60 w-60 rounded-full" />
            </div>
            <div className="space-y-3 mb-12 mt-4">
                <p className="text-2xl text-center"><span className="font-semibold">Name : </span>{user.displayName}</p>
                <p className="text-2xl text-center"><span className="font-semibold">E-Mail :</span>{user.email}</p>
                <p className="text-2xl text-center"><span className="font-semibold">Your Orders : </span>{cart.length}</p>
            </div>
        </div>
    );
};

export default Profile;