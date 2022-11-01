import { usePeople } from '../hooks/usePeople'
import { CharacterCard } from '../components/CharacterCard'

export function Home() {
	const { data } = usePeople()

	return (
		<ul className="grid gap-4 py-2 justify-center grid-cols-[repeat(auto-fit,_minmax(400px,_max-content))]">
			{data?.results.map(char => (
				<CharacterCard key={char.name} character={char} />
			))}
		</ul>
	)
}
