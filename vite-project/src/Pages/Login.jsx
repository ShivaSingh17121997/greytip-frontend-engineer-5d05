import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()



    const handleLogin = (e) => {
        e.preventDefault()
        console.log(username, password)

        axios.post("/api/v1/login/", { username: username, password: password, email: "", phone_number: "", input_code: 0 })
            .then((res) => {
                console.log(res); // Log response data to see what the server returns
                alert("Login successful");
                // Perform any necessary actions upon successful login, such as redirecting the user
                navigate("/")
            })
            .catch((error) => {
                console.log("Something went wrong:", error); // Log the error for debugging
                // Handle error appropriately, such as displaying an error message to the user
            });
    }

    return (
        <div className="bg-white">
            <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Login in to your account
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                                <input
                                    value={username}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    name="text"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-black-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="User name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-black-900 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            <button
                                onClick={handleLogin}
                                type="submit"
                                className="w-full text-black bg-yellow-200 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-200 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
                            >
                                Sign in
                            </button>


                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
