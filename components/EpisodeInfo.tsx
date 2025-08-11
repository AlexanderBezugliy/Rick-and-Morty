    "use client";
import { useGetEpisodesByIdsQuery } from "@/redux/api";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";



interface EpisodeInfoProps {
    episodeUrl: string;
}
const EpisodeInfo: React.FC<EpisodeInfoProps> = ({ episodeUrl }) => {
    const episodeId = episodeUrl.split("/").pop();

    const { data: episodeData, isLoading, isError } = useGetEpisodesByIdsQuery(episodeId || "");
    
    const episode = Array.isArray(episodeData) ? episodeData[0] : episodeData;

    if (isLoading) return <LoadingSpinner />;
    if (isError) return <li className="text-sm font-light text-red-400">Error loading episode...</li>;
    if (!episode) return <li className="text-sm font-light text-gray-500">Episode not found...</li>;

    return (
        <li className="border-b-2 border-yellow-400">
            <span className="text-base font-bold mb-4 text-green-400">Название: </span>{episode.name} <br />
            <span className="text-base font-bold mb-4 text-green-400">Дата выхода: </span>{episode.air_date}
        </li>
    );
};

export default EpisodeInfo;
