import { Link } from 'react-router-dom'
import { Gender } from '../components/Gender'
import { usePeople } from '../hooks/usePeople'

function extractIdFromUrl(url: string) {
	return url
		.split('/')
		.filter(el => el)
		.pop() as string
}

export function Home() {
	const { data } = usePeople()

	return (
		<ul className="grid gap-4 py-2 justify-center grid-cols-[repeat(auto-fit,_minmax(400px,_max-content))]">
			{data?.results.map(char => (
				<li key={char.name} className="card w-96 bg-base-100 shadow-xl">
					<Link to={`people/${extractIdFromUrl(char.url)}`}>
						<div className="card-body">
							<div className="flex justify-between items-center">
								<h2 className="card-title">{char.name}</h2>
								<Gender gender={char.gender} width={24} height={24} />
							</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}
