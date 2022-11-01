import { QueryFunctionContext, useQueries } from '@tanstack/react-query'
import { Starship } from '../types'
import { extractIdFromUrl } from '../utils'

async function fetchStarship(args: QueryFunctionContext) {
	const [, id] = args.queryKey
	return (await (await fetch(`https://swapi.dev/api/starships/${id}`)).json()) as Starship
}

export function useStarship(id: string[] = []) {
	const ids = id.map(val => extractIdFromUrl(val))

	return useQueries({
		queries: ids.map(val => ({ queryKey: ['starship', val], queryFn: fetchStarship, enabled: !!val })),
	})
}
