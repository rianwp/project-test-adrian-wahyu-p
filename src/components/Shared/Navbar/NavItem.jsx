import { Link, useLocation } from "react-router-dom"

const NavItem = ({ href, name, sidebar }) => {
	const location = useLocation()
	const isActive = location.pathname === href

	return (
		<Link to={href} className="flex flex-col gap-0.5">
			<p>{name}</p>
			<div
				className={`${
					sidebar ? "bg-black w-full" : "bg-white w-full"
				} h-1 rounded-full ${isActive ? "block" : "hidden"}`}
			/>
		</Link>
	)
}

export default NavItem
