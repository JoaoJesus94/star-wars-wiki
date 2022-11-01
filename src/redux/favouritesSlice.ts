import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { People } from '../types'

export interface FavouritesState {
	characters: People[]
}

const initialState: FavouritesState = { characters: [] }

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavourite: (state, action: PayloadAction<People>) => {
			state.characters = [...state.characters, { ...action.payload }]
		},
		removeFavourite: (state, action: PayloadAction<string>) => {
			const indexToRemove = state.characters.findIndex(el => el.name === action.payload)
			state.characters.splice(indexToRemove, 1)
		},
	},
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice
