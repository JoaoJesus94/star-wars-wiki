import { useQuery } from '@tanstack/react-query'
import { Planet } from '../types'

export function usePlanet(id: string | undefined) {
	return useQuery(
		['planet', id],
		async () => (await (await fetch(`https://swapi.dev/api/planets/${id}`)).json()) as Planet,
		{ enabled: !!id },
	)
}
