    'use client';
import { cards } from "@/utils/animations";
import { motion } from "framer-motion";
import React from "react";



const Registration = () => {
    const inputClasses = "w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full py-4 px-5 pr-12 placeholder-gray-400 transition-colors duration-300 focus:border-sky-300 focus:shadow-[0_0_5px_theme(colors.sky.300)] font-mono";

    return (
        <div className="flex justify-center items-center h-[90vh] px-2">
            <motion.div 
                {...cards}
                className="w-full max-w-sm bg-transparent border-2 border-white/20 backdrop-blur-[30px] shadow-lg rounded-xl p-8 sm:p-10 box-border overflow-hidden text-white"
            >
                <form>
                    {/* h1 */}
                    <h1 className="text-4xl font-medium text-center mb-4">
                        <strong>Create Your Account</strong>
                    </h1>

                    {/* USERNAME */}
                    <div className="relative w-full h-12 mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className={inputClasses}
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="relative w-full h-12 mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className={inputClasses}
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="relative w-full h-12 mb-4">
                        <input
                            type="email"
                            placeholder="E-Mail"
                            className={inputClasses}
                        />
                    </div>

                    {/* PHONE NUMBER */}
                    <div className="relative w-full h-12 mb-4">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className={inputClasses}
                        />
                    </div>

                    {/* COUNTRY */}
                    <div className="relative w-full h-12 mb-5">
                        <input
                            type="text"
                            placeholder="Country"
                            className={inputClasses}
                        />
                    </div>

                    {/* .register-agreement */}
                    <div className="flex items-start text-sm mb-4">
                        <label className="flex items-center gap-2 font-mono">
                            <input
                                type="checkbox"
                                className="accent-blue-500"
                            />
                            <div>
                                I agree to the
                                <b className="cursor-pointer mx-2 text-sky-300 transition-colors duration-300 hover:text-sky-400 hover:underline">
                                    Terms
                                </b>
                                and
                                <b className="cursor-pointer mx-2 text-sky-300 transition-colors duration-300 hover:text-sky-400 hover:underline">
                                    Privacy Policy
                                </b>
                            </div>
                        </label>
                    </div>

                    {/* button */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-[#333] text-2xl font-light transition-colors duration-300 hover:bg-sky-300 hover:text-white"
                    >
                        Create Account
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Registration;
