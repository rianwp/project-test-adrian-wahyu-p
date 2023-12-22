import { Link, useLocation } from "react-router-dom"

const NavItem = ({ href, name }) => {
	const location = useLocation()
	const isActive = location.pathname === href

	return (
		<Link to={href} className="flex flex-col gap-0.5">
			<p className="text-white">{name}</p>
			<div
				className={`bg-white w-full h-1 rounded-full ${
					isActive ? "block" : "hidden"
				}`}
			/>
		</Link>
	)
}

export default NavItem
