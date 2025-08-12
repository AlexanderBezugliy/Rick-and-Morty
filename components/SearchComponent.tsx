    "use client";
import { useGetCharactersByNameQuery } from "@/redux/api";
import { Character } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";

interface SearchComponentProps {
    onClose: () => void;
}
const SearchComponent = ({ onClose }: SearchComponentProps) => {
    const [search, setSearch] = useState("");

    const { data, isLoading, isError } = useGetCharactersByNameQuery(search, { skip: search.length === 0 });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div className="relative w-full max-w-md mx-auto my-4">
            {/* INPUT */}
            <div className="relative">
                <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder="search characters..."
                    value={search}
                    className="w-full py-3 px-4 pr-12 rounded-full bg-gray-800 bg-opacity-70 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out shadow-lg"
                />

                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            </div>

            {/* RESULTS DROPDOWN */}
            {search.length > 0 && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-lg max-h-96 overflow-y-auto border border-gray-300 backdrop-blur-md z-[999]">

                    { isLoading && <LoadingSpinner /> }
                    { isError && <div className="p-4 text-center text-red-500">Character not found.</div> }
                    { data?.results?.length === 0 && !isLoading && <div className="p-4 text-center text-gray-600">No results.</div> }

                    {data?.results.map((char: Character) => (
                        <Link
                            key={char.id}
                            href={`/character/${char.id}`}
                            onClick={() => {
                                setSearch("");
                                onClose();
                            }}
                            className="flex items-center gap-4 p-2 hover:bg-blue-100 transition-all cursor-pointer border-b last:border-b-0"
                        >
                            <Image
                                src={char.image}
                                alt={char.name}
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />

                            <div>
                                <h2 className="font-semibold text-gray-900">{char.name}</h2>
                                <p className="text-sm text-gray-600">{char.species}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
