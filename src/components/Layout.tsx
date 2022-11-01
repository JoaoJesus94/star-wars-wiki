import { Link, Outlet } from 'react-router-dom'
import { Logo } from './Logo'

export function Layout() {
	return (
		<>
			<nav className="w-full flex items-center h-20 px-6 py-4 border-b border-b-slate-100">
				<Link to={'/'}>
					<Logo className="h-8" />
				</Link>
			</nav>
			<main className="p-6">
				<Outlet />
			</main>
		</>
	)
}
