"use client";
import Cards from "@/components/Cards";
import { useGetFilteredCharactersQuery } from "@/redux/api";
import { cards, filters, portal } from "@/utils/animations";
import { Pagination, Stack, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState(""); // Human || Alien...
    const [page, setPage] = useState(1); // pagination page

    const { data, isLoading, isError } = useGetFilteredCharactersQuery({
        status,
        gender,
        species,
        page,
    });

    useEffect(() => {
        setPage(1);
    }, [status, gender, species]);

    const handlePageChange = (_: number, value: number) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Pagination_Responsive
    const isMobile = useMediaQuery("(max-width:600px)");
    const isTablet = useMediaQuery("(max-width:900px)");

    return (
        <div className="flex flex-col px-4 space-y-4 justify-center items-center">
            {/* LOREM */}
            <motion.div {...portal} className="flex items-center gap-3 mt-3">
                <Image
                    src="/bolt.png"
                    alt="bolt-img"
                    width={70}
                    height={70}
                    className="w-[50px] h-[50px] rotate-90 z-1"
                />
                <h1 className="flex flex-col space-x-4 sm:flex-row items-center text-4xl md:text-6xl lg:text-8xl text-gray-300">
                    <p>AMAIZING</p>
                    <p>PORTAL</p>
                </h1>
                <Image
                    src="/bolt.png"
                    alt="bolt-img"
                    width={70}
                    height={70}
                    className="w-[50px] h-[50px] z-1"
                />
            </motion.div>

            {/* FILTERS */}
            <motion.div
                {...filters}
                className="mt-5 mb-5 flex flex-col gap-4 sm:flex-row"
            >
                <select
                    onChange={(e) => setSpecies(e.target.value)}
                    value={species}
                    className="p-2 border-2 border-black bg-gray-300 rounded"
                >
                    <option value="">Species...</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="Mythological Creature">
                        Mythological Creature
                    </option>
                    <option value="Robot">Robot</option>
                    <option value="Animal">Animal</option>
                    <option value="Cronenberg">Cronenberg</option>
                    <option value="Disease">Disease</option>
                    <option value="Planet">Planet</option>
                    <option value="unknown">Unknown</option>
                </select>

                <select
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    className="p-2 border-2 border-black bg-gray-300 rounded"
                >
                    <option value="">Status...</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>

                <select
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    className="p-2 border-2 border-black bg-gray-300 rounded"
                >
                    <option value="">Gender...</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </motion.div>

            {/* CARDS */}
            <motion.div {...cards} className="backdrop-blur-md">
                <Cards
                    dataFiltered={data}
                    isLoading={isLoading}
                    isError={isError}
                />
            </motion.div>

            {/* ПАГИНАЦИЯ */}
            <motion.div {...cards} className="mt-10 mb-10">
                {data?.info?.pages && (
                    <Stack
                        spacing={2}
                        className="bg-gray-300 p-2 mt-5 mb-5 border border-black rounded-full"
                    >
                        <Pagination
                            onChange={handlePageChange}
                            count={data.info.pages}
                            page={page}
                            color="primary"
                            size={isMobile ? "small" : isTablet ? "medium" : "large"}
                            siblingCount={isMobile ? 0 : 1} 
                            boundaryCount={isMobile ? 1 : 2} 
                            showFirstButton={!isMobile}
                            showLastButton={!isMobile} 
                        />
                    </Stack>
                )}
            </motion.div>
        </div>
    );
}
