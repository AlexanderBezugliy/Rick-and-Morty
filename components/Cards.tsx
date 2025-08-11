import { Character, CharacterApiResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface CardsProps {
    dataFiltered: CharacterApiResponse | undefined;
    isLoading: boolean;
    isError: boolean;
}
const Cards = ({ dataFiltered, isLoading, isError }: CardsProps) => {
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <LoadingSpinner />
            </div>
        );
    }
    if (isError) return <div>Error fetching characters</div>;

    const firstEighteen = dataFiltered?.results?.slice(0, 18);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {firstEighteen?.map((char: Character) => (
                <Link
                    key={char.id}
                    href={`/character/${char.id}`}
                    className="bg-transparent backdrop-blur-xl border border-black rounded-2xl shadow"
                >
                    <div className="flex flex-row items-center">
                        <div className="overflow-hidden rounded-md relative w-36 h-36 md:w-40 md:h-40 flex-shrink-0">
                            <Image
                                src={char.image}
                                alt={char.name}
                                fill
                                className="rounded-l-2xl object-cover transition-transform duration-300 hover:scale-125"
                            />
                        </div>
                        
                        <div className="p-3 flex-grow text-white">
                            <h3 className="font-medium text-black text-xl text-left">
                                {char.name}
                            </h3>
                            <p className="text-sm font-light font-mono text-left">
                                Species: {char.species}
                            </p>
                            <p className="text-sm font-light font-mono text-left">
                                Status:{" "}
                                <span
                                    className={`${
                                        char.status === "Alive"
                                            ? "text-green-400"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {char.status}
                                </span>
                            </p>
                            <p className="text-sm font-light font-mono text-left">
                                Gender: {char.gender}
                            </p>
                            <p className="text-sm font-light font-mono text-left">
                                Location:{" "}
                                {char.origin.name.replace(/\s*\(.*\)/, "")}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
