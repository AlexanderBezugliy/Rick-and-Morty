"use client"; 
import CharacterDetails from "@/components/CharacterDetails";
import { useParams } from "next/navigation"; // <--- 2. Импортируем хук useParams

const CharacterPage = () => {
    const params = useParams(); // <--- 3. Получаем параметры маршрута через хук
    const characterId = params.id as string; // Получаем наш id

    // Можно добавить проверку, если id вдруг не придет
    // if (!characterId) {
    //     return <div>Loading...</div>; // Или компонент ошибки
    // }

    return <CharacterDetails characterId={characterId} />;
};

export default CharacterPage;



// import CharacterDetails from "@/components/CharacterDetails";



// interface CharacterPageProps {
//     params: { id: string };
// }
// const CharacterPage = ({ params }: CharacterPageProps) => {
//     return <CharacterDetails characterId={params.id} />;
// };

// export default CharacterPage;

