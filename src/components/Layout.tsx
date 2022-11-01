import { Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<>
			<span>Shared layout</span>
			<Outlet />
		</>
	)
}
