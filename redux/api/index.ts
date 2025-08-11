import { Character, CharacterApiResponse, Episode, FilteredProps } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    endpoints: (builder) => ({
        getCharacters: builder.query<CharacterApiResponse, void>({
            query: () => `character?page=1`,
        }),
        getCharacterById: builder.query<Character, string>({
            query: (id) => `character/${id}`,
        }),
        getEpisodesByIds: builder.query<Episode | Episode[], string>({
            query: (ids: string) => `episode/${ids}`, 
        }),
        getCharactersByName: builder.query({
            query: (name: string) => `character/?name=${name}`,
        }),
        getFilteredCharacters: builder.query<CharacterApiResponse, FilteredProps>({
            query: (params) => {
                const queryParams = new URLSearchParams();

                if (params.name) queryParams.append("name", params.name);
                if (params.status) queryParams.append("status", params.status);
                if (params.gender) queryParams.append("gender", params.gender);
                if (params.species) queryParams.append("species", params.species);

                if (params.page) queryParams.append("page", params.page.toString()); //пагинация

                return `character/?${queryParams.toString()}`;
            }
        })
      }),
});

export const { 
    useGetCharactersQuery,
    useGetCharacterByIdQuery,
    useGetEpisodesByIdsQuery,
    useGetCharactersByNameQuery,
    useGetFilteredCharactersQuery,

} = rickAndMortyApi