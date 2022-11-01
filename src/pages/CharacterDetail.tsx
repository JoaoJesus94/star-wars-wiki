import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { HeartStraight } from 'phosphor-react'

import { useCharacter } from '../hooks/useCharacter'
import { useIsFavourite } from '../redux/selectors'

import { addFavourite, removeFavourite } from '../redux/favouritesSlice'
import { Gender } from '../components/Gender'
import { usePlanet } from '../hooks/usePlanet'
import { useStarship } from '../hooks/useStarship'
import { extractIdFromUrl } from '../utils'
import { Loader } from '../components/Loader'

export function CharacterDetail() {
	const dispatch = useDispatch()
	const { characterId } = useParams()
	const { data: character, isLoading: isCharacterLoading } = useCharacter(characterId)
	const { data: planet, isLoading: isPlanetLoading } = usePlanet(extractIdFromUrl(character?.homeworld))
	const starships = useStarship(character?.starships)
	const isFavourite = useIsFavourite(character?.name)
	const isStarshipLoading = starships.some(ship => ship.isLoading)

	if (isCharacterLoading || isPlanetLoading || isStarshipLoading) return <Loader />

	if (!character || !planet || !starships) return null

	return (
		<>
			<Link className="link hover:text-accent-content" to="/">
				Back to home
			</Link>
			<div className="max-w-sm pt-8">
				<h1 className="text-center text-2xl mb-4 text-accent-content">{character.name}</h1>
				<ul className="flex flex-col gap-2">
					<li className="flex justify-between">
						<span>Birth year:</span>
						<span>{character.birth_year}</span>
					</li>
					<li className="flex justify-between">
						<span>Gender:</span>
						<Gender gender={character.gender} width={24} height={24} />
					</li>
					<li className="flex justify-between">
						<span>Height:</span>
						<span>{character.height} cm</span>
					</li>
					<li className="flex justify-between">
						<span>Weight:</span>
						<span>{character.mass} kg</span>
					</li>
					<li className="flex justify-between">
						<span>Eye color:</span>
						<span>{character.eye_color}</span>
					</li>
					<li className="flex justify-between">
						<span>Hair color:</span>
						<span>{character.hair_color}</span>
					</li>
					<li className="flex justify-between">
						<span>Homeworld:</span>
						<Link className="link hover:text-accent-content" to={`../planet/${extractIdFromUrl(character.homeworld)}`}>
							{planet.name}
						</Link>
					</li>
					<li className="flex justify-between">
						<span>StarShips:</span>
						<div className="flex flex-col text-right">
							{starships.map(starship => (
								<Link
									className="link hover:text-accent-content"
									to={`../starship/${extractIdFromUrl(starship.data?.url)}`}
									key={starship.data?.name}
								>
									{starship.data?.name}
								</Link>
							))}
						</div>
					</li>
				</ul>
				<button
					onClick={
						isFavourite ? () => dispatch(removeFavourite(character.name)) : () => dispatch(addFavourite(character))
					}
					className="btn w-full mt-4 flex gap-4 group"
				>
					{isFavourite ? 'Remove from favourites' : 'Add to favourites'}
					<HeartStraight
						className="group-hover:text-red-600"
						width={24}
						height={24}
						weight={isFavourite ? 'fill' : 'regular'}
					/>
				</button>
			</div>
		</>
	)
}
