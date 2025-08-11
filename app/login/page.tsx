    'use client'
import { cards } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const LogIn = () => {

    

    return (
        <div 
            className="flex justify-center items-center h-[90vh] px-2"
        >
            <motion.div 
                {...cards} 
                className="w-full max-w-sm bg-transparent border-2 border-white/20 backdrop-blur-[30px] shadow-lg rounded-xl p-8 sm:p-10 box-border overflow-hidden text-white"
            >
                <form>
                    <h1 className="text-4xl font-medium text-center mb-6">Login</h1>
                    {/* USERNAME */}
                    <div className="relative w-full h-12 font-mono mb-8">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full py-4 px-5 pr-12 placeholder-white transition-colors duration-300 focus:border-sky-300 focus:shadow-[0_0_5px_theme(colors.sky.300)]"
                        />
                    </div>
                    {/* PASSWORD */}
                    <div className="relative w-full h-12 font-mono mb-8">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full text-white py-4 px-5 pr-12 placeholder-white transition-colors duration-300 focus:border-sky-300 focus:shadow-[0_0_5px_theme(colors.sky.300)]"
                        />
                    </div>

                    {/* REMEMBER / FORGET */}
                    <div className="flex justify-between items-center font-mono text-sm mb-4 mt-[-15px]">
                        <label className="flex items-center gap-1">
                            <input
                                type="checkbox"
                                className="accent-blue-500"
                            />
                            Remember Me
                        </label>
                        <Link
                            href="/registration"
                            className="text-black no-underline transition-colors duration-300 hover:underline hover:text-sky-300"
                        >
                            Forget Password
                        </Link>
                    </div>

                    {/* button */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-[#333] text-2xl font-light transition-colors duration-300 hover:bg-sky-300 hover:text-white"
                    >
                        Login
                    </button>

                    {/* .register-link */}
                    <div className="text-sm text-center mt-5 mb-4">
                        <p className="font-mono">
                            Don't have an account?{" "}
                            <Link
                                href="/registration"
                                // a
                                className="text-black no-underline font-semibold transition-colors duration-300 hover:underline hover:text-sky-300"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default LogIn;
