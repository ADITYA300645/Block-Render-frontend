import { hideBanner } from "@/features/authBannerSlice";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useAccount, useDisconnect } from "wagmi";
function SignInOverlay({ isVisible }) {
    const [isAuth, setIsAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const { address } = useAccount();
    const disconnect = useDisconnect();

    const dispatch = useDispatch();

    useEffect(() => {
        setIsAuth(getCookie("auth"));
    }, [isAuth]);

    async function register() {
        if (name === "" || email === "") {
            toast("Fields Empty", { type: "warning", theme: "dark" });
            return;
        }
        setIsLoading(true);
        console.log(address);
        var res = await axios.post("http://localhost:8080/auth/register", {
            AccountNo: address,
            Name: name,
            Email: email,
        });
        console.log(res.data);
        setIsLoading(false);
    }
    return (
        <>
            {!isVisible ? (
                <div></div>
            ) : (
                <div
                    className="h-screen w-screen flex 
                    items-center justify-center 
                         fixed z-10 bg-gradient-to-r from-slate-500 to-slate-900 bg-opacity-100"
                >
                    <div
                        className="fixed top-10 right-10 font-bold text-2xl cursor-pointer"
                        onClick={() => dispatch(hideBanner())}
                    >
                        X
                    </div>
                    <div className="w-8/12 h-4/6 bg-white rounded text-black flex justify-between border-2 border-slate-400 ">
                        <div className="w-1/2 text-white bg-slate-700 rounded-l flex items-center justify-center text-2xl font-semibold ">
                            Sign Up
                        </div>
                        <div className="w-1/2 flex items-center justify-center flex-col ">
                            <div className="relative ">On Bording ... </div>
                            <input
                                placeholder="Name"
                                onChange={(name) => setName(name.target.value)}
                                className="w-3/4 p-2 my-4 bg-slate-300 rounded focus:outline-none"
                            />
                            <input
                                placeholder="Email"
                                onChange={(name) => setEmail(name.target.value)}
                                className="w-3/4 p-2 my-4 bg-slate-300 rounded focus:outline-none"
                            />
                            <div className="flex [&>*]:mx-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="check"
                                        className="hover:cursor-pointer"
                                    />
                                    <label
                                        className="ml-1 mb-1 text-gray-500 hover:text-gray-900 cursor-pointer"
                                        htmlFor="check"
                                    >
                                        save my details
                                    </label>
                                </div>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 mx-2 rounded transition-all duration-500"
                                    onClick={() => register()}
                                >
                                    {isLoading ? "loading..." : "Login"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignInOverlay;
