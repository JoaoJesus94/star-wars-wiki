import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { HeartStraight } from 'phosphor-react'

import { People } from '../types'
import { RootState } from '../redux/store'
import { addFavourite, removeFavourite } from '../redux/favouritesSlice'
import { useIsFavourite } from '../redux/selectors'

function extractIdFromUrl(url: string) {
	return url
		.split('/')
		.filter(el => el)
		.pop() as string
}

type CharacterCardProps = { character: People }

export function CharacterCard({ character }: CharacterCardProps) {
	const isFavourite = useIsFavourite(character.name)
	const dispatch = useDispatch()

	return (
		<li key={character.name} className="card w-96 bg-base-100 shadow-xl">
			<Link to={`people/${extractIdFromUrl(character.url)}`}>
				<div className="card-body">
					<div className="flex justify-between items-center">
						<h2 className="card-title">{character.name}</h2>
						<HeartStraight
							className="hover:text-red-600"
							onClick={e => {
								e.preventDefault()
								if (isFavourite) dispatch(removeFavourite(character.name))
								else dispatch(addFavourite(character))
							}}
							width={24}
							height={24}
							weight={isFavourite ? 'fill' : 'regular'}
						/>
					</div>
				</div>
			</Link>
		</li>
	)
}
