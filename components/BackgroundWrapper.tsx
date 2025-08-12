"use client";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import Header from "./Header";
import Basket from "./Basket";
import { motion } from "framer-motion";
import { headerUp } from "@/utils/animations";


const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const pathname = usePathname();

    let backgroundClass = "bg-app-bg";

    if (pathname === "/login") {
        backgroundClass = "bg-login-bg";
    } else if (pathname === "/registration") {
        backgroundClass = "bg-registr-bg";
    }

    const openCart = useCallback(() => setIsCartOpen(true), [])
    const closeCart = useCallback(() =>  setIsCartOpen(false),[]);
    
    return (
        <div className={`min-h-screen bg-fixed bg-cover bg-no-repeat ${backgroundClass}`}>
            <motion.div
                {...headerUp}
            >
                <Header onOpenBasket={openCart} />
            </motion.div>
            
            {children}
            
            {/* RENDER MODAL BASKET */}
            <Basket isOpen={isCartOpen} onClose={closeCart} />
        </div>
    );
};

export default BackgroundWrapper;
