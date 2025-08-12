    "use client"; 
import CharacterDetails from "@/components/CharacterDetails";
import { useParams } from "next/navigation"; 

const CharacterPage = () => {
    const params = useParams(); 
    const characterId = params.id as string; 

    return (
        <CharacterDetails characterId={characterId} />
    );
};

export default CharacterPage;
