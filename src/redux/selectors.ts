import { useSelector } from 'react-redux'
import { People } from '../types'
import { RootState } from './store'

export function useIsFavourite(characterName: People['name'] | undefined) {
	return useSelector(
		(state: RootState) => characterName && state.favourites.characters.find(favChar => favChar.name === characterName),
	)
}
