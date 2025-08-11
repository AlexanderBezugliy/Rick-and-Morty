
export interface Character {
    id: number
    name: string
    image: string
    status: string
    species: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string,
        url: string,
    }
    episode: string[]
};

export interface CharacterApiResponse {
    info: {
        count: number
        pages: number
        next: string
        prev: string | null
    }
    
    results: Character[]
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface FilteredProps { 
    name?: string;
    status?: string;
    gender?: string;
    species?: string;

    page?: number; //для пагинации
}