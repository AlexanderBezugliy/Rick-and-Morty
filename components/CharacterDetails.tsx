"use client";
import Button from "@/components/Button";
import EpisodeInfo from "@/components/EpisodeInfo";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetCharacterByIdQuery } from "@/redux/api";
import { addToCart } from "@/redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Character } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";


interface CharacterDetailsProps {
    characterId: string;
}
const CharacterDetails = ({ characterId }: CharacterDetailsProps) => {
    const [showAllEpisodes, setShowAllEpisodes] = useState(false);

    const {
        data: character,
        isLoading,
        isError,
    } = useGetCharacterByIdQuery(characterId) as {
        data: Character | undefined;
        isLoading: boolean;
        isError: boolean;
    };

    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.characters.characters);

    const isInFavorites = favorites.some(
        (item: Character) => item.id === character?.id
    );

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <LoadingSpinner />
            </div>
        );
    }
    if (isError)
        return (
            <div className="text-center text-red-500 text-xl mt-10">
                Error loading character...
            </div>
        );
    if (!character)
        return (
            <div className="text-center text-white text-xl mt-10">
                Character not found or data missing...
            </div>
        );

    return (
        <div className="container mx-auto p-4 md:p-8">
            <Link
                href="/"
                className="inline-flex items-center gap-3 text-2xl text-white mb-4 transition-transform duration-300 hover:scale-105"
            >
                <span className="p-2 rounded-full bg-orange-400">
                    <FaArrowLeft />
                </span>
                back to all characters
            </Link>

            <div className="bg-transparent backdrop-blur-xl border border-gray-700 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:items-start gap-3 md:gap-10 text-white">
                <div className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden border-4 border-orange-300">
                    {/* CHAR-IMG */}
                    <Image
                        src={character.image}
                        alt={character.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* CHAR INFO */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                        {character.name}
                    </h1>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Вид:</span>{" "}
                        {character.species}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Статус:</span>{" "}
                        {character.status}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Пол:</span>{" "}
                        {character.gender}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Происхождение:</span>{" "}
                        {character.origin.name.replace(/\s*\(.*\)/, "")}
                    </p>
                    <p className="text-lg mb-6">
                        <span className="font-semibold">Текущая локация:</span>{" "}
                        {character.location.name.replace(/\s*\(.*\)/, "")}
                    </p>

                    {/* ADD TO FAVORITE */}
                    {isInFavorites ? (
                        <Button
                            style="bg-green-400 hover:from-green-500 hover:to-green-100"
                            disabled={true}
                        >
                            In Favorite
                        </Button>
                    ) : (
                        <Button
                            style="bg-orange-400 hover:from-orange-500 hover:to-orange-100"
                            onClick={() => dispatch(addToCart(character))}
                        >
                            Add to Favorite
                        </Button>
                    )}

                    {character.episode.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold mb-3 text-yellow-400">
                                Эпизоды:
                            </h2>

                            <ul className="grid grid-cols-1 gap-2 max-h-300 overflow-y-auto pr-2 custom-scrollbar">
                                {(showAllEpisodes
                                    ? character.episode
                                    : character.episode.slice(0, 5)
                                ).map((episodeUrl: string, index: number) => (
                                    <EpisodeInfo
                                        key={index}
                                        episodeUrl={episodeUrl}
                                    />
                                ))}
                            </ul>

                            {character.episode.length > 5 && (
                                <button
                                    onClick={() =>
                                        setShowAllEpisodes(!showAllEpisodes)
                                    }
                                    className="mt-3 px-4 py-1 bg-orange-400 hover:bg-orange-500 text-black font-bold rounded-full border-2 border-white transition"
                                >
                                    {showAllEpisodes ? "Hide" : "Show"}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;
