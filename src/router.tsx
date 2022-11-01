import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { CharacterDetail } from './pages/CharacterDetail'

function NotImplemented() {
	return (
		<div>
			<h1>Page not implemented</h1>
		</div>
	)
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'character/:characterId', element: <CharacterDetail /> },
			{ path: 'planet/:planetId', element: <NotImplemented /> },
			{ path: 'starship/:starshipId', element: <NotImplemented /> },
		],
	},
])
