import { usePeople } from '../hooks/usePeople'

export function Home() {
	const { data } = usePeople()

	console.log({ data })

	return (
		<ul>
			{data?.results.map(char => (
				<li key={char.name}>{char.name}</li>
			))}
		</ul>
	)
}
