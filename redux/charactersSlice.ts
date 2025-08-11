import { Character } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface CharactersState {
    characters: Character[]
}
const initialState: CharactersState = {
    characters: [],
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Character>) => {
            const exists = state.characters.find(character => character.id === action.payload.id);

            if (!exists) {
                state.characters.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.characters = state.characters.filter(character => character.id !== action.payload);
        },
    },
})

export const { addToCart, removeFromCart } = charactersSlice.actions

export default charactersSlice.reducer