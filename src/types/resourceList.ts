import { People, Planet, Starship } from './index'

export type ResourceList<T extends People | Planet | Starship> = {
	count: number
	next: string
	previous: string
	results: T[]
}
