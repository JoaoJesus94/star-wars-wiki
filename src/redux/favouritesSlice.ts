import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { People } from '../types'

export interface FavouritesState {
	character: People[]
}

const initialState: FavouritesState = { character: [] }

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavourite: (state, action: PayloadAction<People>) => {
			state.character = [...state.character, { ...action.payload }]
		},
		removeFavourite: (state, action: PayloadAction<string>) => {
			const indexToRemove = state.character.findIndex(el => el.name === action.payload)
			const tempArr = state.character.splice(indexToRemove, 1)
			state.character = tempArr
		},
	},
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice
