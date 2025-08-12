"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import SearchComponent from "./SearchComponent";
import Link from "next/link";
import { MdCollectionsBookmark } from "react-icons/md";
import { useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";
import { mobileMenuVariants } from "@/utils/animations";



interface HeaderProps {
    onOpenBasket: () => void;
}
const Header = ({ onOpenBasket }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const { characters } = useAppSelector((state) => state.characters);

    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="flex justify-between items-center px-16 py-4 sm:py-0  bg-transparent backdrop-blur-md border-b-2 relative z-50">
            {/* LOGO */}
            <div className="flex items-center gap-4">
                <Link href="/">
                    <Image 
                        src="/Logo.png" 
                        width={60} 
                        height={60} 
                        alt="logo" 
                        className="transition-transform duration-300 hover:scale-125" 
                    />
                </Link>
                {/* SEARCH */}
                <div className="hidden sm:block">
                    <SearchComponent  />
                </div>
            </div>

            <nav className="flex gap-6 items-center">
                {/* NAV */}
                <ul className="hidden lg:flex gap-7 text-gray-300 font-semibold ml-5">
                    <li className="font-bold text-xl cursor-pointer">
                        <Link href="/">
                            <p className={`transition-transform duration-300 hover:scale-125 ${ pathname === '/' ? 'text-cyan-400' : ''}`}>Home</p>
                        </Link>
                    </li>
                    <li className="font-bold text-xl cursor-pointer">
                        <Link href="/login">
                            <p className={`transition-transform duration-300 hover:scale-125 ${ pathname === '/login' ? 'text-cyan-400' : ''}`}>Log-in</p>
                        </Link>
                    </li>
                    <li className="font-bold text-xl cursor-pointer">
                        <Link href="/registration">
                            <p className={`transition-transform duration-300 hover:scale-125 ${ pathname === '/registration' ? 'text-cyan-400' : ''}`}>Registration</p>
                        </Link>
                    </li>
                </ul>
                {/* (BASKET-CHERACTERS) */}
                <button
                    onClick={onOpenBasket}
                    className="relative rounded-full block text-gray-300 transition-transform duration-300 hover:scale-125 hover:text-cyan-400"
                >
                    <MdCollectionsBookmark
                        size={35}
                        className="cursor-pointer"
                    />

                    {characters.length > 0 && (
                        <span className="absolute -bottom-3 left-3/4 transform -translate-x-1/2 bg-red-500 text-white text-xl font-light rounded-full px-2 py-[1px]">
                            {characters.length}
                        </span>
                    )}
                </button>
                {/* HAMBURGER - MENU */}
                <div
                    className="block lg:hidden text-3xl cursor-pointer ml-4"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <HiOutlineX className="text-gray-300 hover:text-cyan-400 w-[30px] h-[30px]" />
                    ) : (
                        <FaHamburger className="text-gray-300 hover:text-cyan-400 w-[30px] h-[30px]" />
                    )}
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed top-[92px] left-0 w-full h-[100vh] p-5 flex flex-col items-center gap-5 border-b border-[#7042f861] bg-gradient-to-b from-[#030014cc] to-[#0f0f2dcc] z-[49]"
                    >
                        <ul className="flex flex-col items-center gap-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-500 cursor-pointer text-lg py-2">
                            <li className="font-bold text-xl cursor-pointer">
                                <Link 
                                    href="/" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="font-bold text-xl cursor-pointer">
                                <Link 
                                    href="/login" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    Log-in
                                </Link>
                            </li>
                            <li className="font-bold text-xl cursor-pointer">
                                <Link 
                                    href="/registration"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Registration
                                </Link>
                            </li>
                            <li>
                                {/* MOBILE Search */}
                                <SearchComponent onClose={() => setIsOpen(false)} />
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
