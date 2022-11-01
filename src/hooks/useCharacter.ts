import { useQuery } from '@tanstack/react-query'
import { People } from '../types'

export function useCharacter(id: string | undefined) {
	return useQuery(
		['character', id],
		async () => (await (await fetch(`https://swapi.dev/api/people/${id}`)).json()) as People,
		{ enabled: !!id },
	)
}
