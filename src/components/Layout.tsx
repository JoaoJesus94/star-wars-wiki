import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'

export function Layout() {
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<>
			<nav className="w-full flex items-center justify-between h-20 px-6 py-4 border-b border-b-slate-100">
				<Link to={'/star-wars-wiki'}>
					<Logo className="h-8" />
				</Link>
				<div className="form-control">
					<div className="input-group">
						<input
							type="text"
							placeholder="Search by character..."
							className="input input-bordered"
							onChange={e => setSearchTerm(e.target.value)}
						/>
						<button className="btn btn-square" onClick={() => navigate(`people/?search=${searchTerm}`)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>
			<main className="p-6">
				<Outlet />
			</main>
		</>
	)
}
