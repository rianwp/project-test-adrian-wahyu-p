import { useEffect, useState } from "react"
import Brand from "../../Brand"
import Container from "../../Container"
import { navItems } from "../../../lib/navItems"
import NavItem from "./NavItem"
import menu from "../../../assets/menu.svg"
import chevron_right from "../../../assets/chevron-right.svg"

const Navbar = () => {
	const [open, setOpen] = useState(false)
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
		<>
			<div
				className={`fixed top-0 left-0 w-full h-16 transition duration-300 z-40 ${
					show ? "translate-y-0" : "-translate-y-16"
				} ${
					currentScrollY === 0 ? "bg-primary" : "bg-primary/60 backdrop-blur-sm"
				}`}
			>
				<Container className="flex justify-between items-center h-full">
					<Brand />
					<div>
						<div className="md:flex flex-row gap-8 hidden text-white">
							{navItems.map((navItem, index) => {
								return (
									<NavItem
										key={index}
										href={navItem.href}
										name={navItem.name}
									/>
								)
							})}
						</div>
						<button className="md:hidden block" onClick={() => setOpen(true)}>
							<img src={menu} className="w-6 h-6" />
						</button>
					</div>
				</Container>
			</div>
			<div
				className={`md:w-64 w-full fixed h-screen md:-right-64 -right-full bg-white top-0 ${
					open ? "-translate-x-64" : "translate-x-0"
				} transition duration-300 z-50`}
			>
				<div className="w-fit p-4 flex flex-col gap-4">
					<button onClick={() => setOpen(false)}>
						<img src={chevron_right} className="w-5 h-5" />
					</button>
					{navItems.map((navItem, index) => {
						return (
							<NavItem
								sidebar
								key={index}
								href={navItem.href}
								name={navItem.name}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Navbar
