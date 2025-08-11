import CharacterDetails from "@/components/CharacterDetails";




const CharacterPage = ({ params }: { params: { id: string } }) => {
    return (
        <CharacterDetails characterId={params.id} />
    );
};

export default CharacterPage;
