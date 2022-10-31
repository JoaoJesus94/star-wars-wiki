import { configureStore } from '@reduxjs/toolkit'
import favouritesSlice from './favouritesSlice'

export const store = configureStore({
	reducer: {
		[favouritesSlice.name]: favouritesSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
