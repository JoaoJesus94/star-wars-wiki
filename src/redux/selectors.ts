import { useSelector } from 'react-redux'
import { People } from '../types'
import { RootState } from './store'

export function useIsFavourite(characterName: People['name']) {
	return useSelector(
		(state: RootState) => !!state.favourites.characters.find(favChar => favChar.name === characterName),
	)
}
