import { useQuery } from '@tanstack/react-query'
import { People, ResourceList } from '../types'

export function usePeople() {
	return useQuery(
		['generations'],
		async () => (await (await fetch('https://swapi.dev/api/people')).json()) as ResourceList<People>,
	)
}
