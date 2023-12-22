import { useEffect, useState } from "react"
import Brand from "../../Brand"
import Container from "../../Container"
import { navItems } from "../../../lib/navItems"
import NavItem from "./NavItem"

const Navbar = () => {
	const [show, setShow] = useState(true)
	const [currentScrollY, setCurrentScrollY] = useState(window.scrollY)

	useEffect(() => {
		const onScroll = () => {
			if (currentScrollY > window.scrollY) {
				setShow(true)
			} else if (currentScrollY < window.scrollY) {
				setShow(false)
			}
			setCurrentScrollY(window.scrollY)
		}
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [currentScrollY])

	return (
		<div
			className={`fixed top-0 left-0 w-full h-16 transition duration-300 z-50 ${
				show ? "translate-y-0" : "-translate-y-16"
			} ${
				currentScrollY === 0 ? "bg-primary" : "bg-primary/60 backdrop-blur-sm"
			}`}
		>
			<Container className="flex justify-between items-center h-full">
				<Brand />
				<div className="flex flex-row gap-8">
					{navItems.map((navItem, index) => {
						return (
							<NavItem key={index} href={navItem.href} name={navItem.name} />
						)
					})}
				</div>
			</Container>
		</div>
	)
}

export default Navbar
