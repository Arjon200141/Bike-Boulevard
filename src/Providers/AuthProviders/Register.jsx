import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "./AuthProviders";
import auth from "../../../firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        try {
            const result = await createUser(email, password);
            await updateUserProfile(result.user, { displayName: name });
            console.log("Profile updated successfully!");

            axiosPublic.post('/users', {
                uid: result.user.uid,
                name: name,
                email: email
            })
                .then(response => {
                    console.log("User added to backend:", response.data);
                    toast.success("Registration successful!");
                    navigate('/');
                })
                .catch(error => {
                    console.error("Error adding user to backend:", error);
                    toast.error("Failed to register user. Please try again.");
                });

        } catch (error) {
            console.error("Error during registration:", error);
            setRegisterError(error.message);
            toast.error(error.message);
        }
    };

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                axiosPublic.post('/users', {
                    uid: loggedInUser.uid,
                    name: loggedInUser.displayName,
                    email: loggedInUser.email
                })
                    .then(response => {
                        console.log("Google user added to backend:", response.data);
                        toast.success("Login successful!");
                        navigate("/");
                    })
                    .catch(error => {
                        console.error("Error adding Google user to backend:", error);
                        toast.error("Failed to log in with Google. Please try again.");
                        navigate("/")
                    });

            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message);
            })
    }

    return (
        <div className="w-full bg-amber-50 min-h-screen">
            <ToastContainer />
            <div className="hero-content ">
                <div className="card shrink-0 border-2 border-orange-200 bg-amber-100/35 w-full max-w-xl shadow-2xl">
                    <h2 className="text-3xl text-center font-bold mt-6">Register Now</h2>
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-300 px-6">Register</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>

                    <div className="mb-2 flex justify-center items-center gap-12">
                        <button onClick={handleGoogleLogin} className="btn h-16 px-6 py-1 ">
                            <img src="https://i.ibb.co/PMh8F7x/google-symbol.png" alt="Google" className="h-10 w-10" />
                        </button>
                    </div>
                    <p className="text-xl font-semibold text-center mb-6">Already Have an Account? <Link to="/login" className="text-red-500">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
