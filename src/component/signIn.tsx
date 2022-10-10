import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignIn() {

    const [userName, SetUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const HandleClick = () => {
        console.log(userName, password)
        if (userName) {
            navigate("/dahsboard")
        } else {
            alert("Enter The Correct Email-ID or Password");
        }
    }

    return (
        <>
            <div className="loginBg flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

                  <div className="bg-white px-10 py-6">
                    <div>
                    <div>
                        <img
                            style={{ width: "60px", height: "4rem" }}
                            className="mx-auto h-12 w-auto"
                            src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                            Log in
                        </h2>
                    </div>

                    <form className="mt-8 space-y-6 " action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 
                                    rounded w-80 py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-purple-500 mb-5"
                                    placeholder="Email address"

                                    onChange={(e) => {
                                        SetUserName(e.target.value)
                                    }}
                                    value={userName}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 
                                    rounded w-80 py-2 px-4 text-gray-700 leading-tight 
                                    focus:outline-none focus:bg-white focus:border-purple-500 mb-5"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    value={password}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border 
                border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white 
                hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                focus:ring-offset-2"
                                onClick={HandleClick}
                            >
                                <span className="absoluteinset-y-0 left-0 flex items-center pl-3 ">
                                </span>
                                Log in
                            </button>
                        </div>
                    </form>
                    </div>

                    </div>
            </div>
        </>
    )
}