import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from '../components/CharacterCard'
import { Loader } from '../components/Loader'

export function Home() {
	const { data, isLoading } = useCharacters()

	if (isLoading) return <Loader />

	return (
		<ul className="grid gap-4 py-2 justify-center grid-cols-[repeat(auto-fit,_minmax(400px,_max-content))]">
			{data?.results.map(char => (
				<CharacterCard key={char.name} character={char} />
			))}
		</ul>
	)
}
