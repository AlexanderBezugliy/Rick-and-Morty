import { removeFromCart } from "@/redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { basketAnimation, basketAnimationWrapper } from "@/utils/animations";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import Button from "./Button";
import { MdDeleteForever } from "react-icons/md";
import { Character } from "@/types";
import { IoMdCloseCircle } from "react-icons/io";

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const Basket = ({ isOpen, onClose }: CartModalProps) => {
    const dispatch = useAppDispatch();
    const { characters } = useAppSelector(
        (state: RootState) => state.characters
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    {...basketAnimationWrapper}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                >
                    <motion.div
                        {...basketAnimation}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-zinc-800 rounded-2xl border border-white shadow-lg p-3 sm:p-6  w-[90%] min-h-[500px] relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-zinc-300 hover:text-green-500 text-2xl"
                        >
                            <RiCloseLargeFill />
                        </button>

                        <div className="flex justify-start items-center mb-4">
                            <p className="px-2 text-center font-bold text-2xl md:text-3xl text-green-500">
                                Your Favorites{" "}
                            </p>

                            <Image
                                src="/favorites.png"
                                width={60}
                                height={50}
                                alt="basket-favorites"
                            />
                        </div>

                        {characters.length === 0 ? (
                            <p className="text-center text-zinc-600 dark:text-zinc-300">
                                not a single character has been selected...
                            </p>
                        ) : (
                            <ul className="space-y-4 max-h-[500px] text-xs overflow-y-auto custom-scrollbar">
                                {characters.map((char: Character) => (
                                    <li
                                        key={char.id}
                                        className="flex items-center justify-between sm:gap-4 bg-zinc-700 p-3 rounded-lg"
                                    >
                                        <div className="w-full flex justify-between items-center gap-2 sm:gap-6">
                                            <div className="w-20 h-20 relative flex-shrink-0">
                                                <Image
                                                    src={char.image}
                                                    alt={char.name}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>

                                            <div className="text-white flex-1">
                                                <h3 className="text-sm sm:text-lg font-bold">
                                                    {char.name}
                                                </h3>
                                                <p className="font-mono text-sm sm:text-lg p-0 m-0">
                                                    {char.species} • {char.status}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Desctop_remove-char */}
                                        <Button
                                            onClick={() =>
                                                dispatch(
                                                    removeFromCart(char.id)
                                                )
                                            }
                                            style="hidden sm:block bg-red-400 hover:from-red-500 hover:to-red-100"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-base">
                                                    Remove
                                                </span>
                                                <MdDeleteForever size={20} />
                                            </div>
                                        </Button>
                                        {/* Mobile_remove-char */}
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    removeFromCart(char.id)
                                                )
                                            }
                                            className="block sm:hidden text-white"
                                        >
                                            <IoMdCloseCircle size={35} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Basket;
