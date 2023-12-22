import { useEffect, useState } from "react"
import bgimg from "../../assets/bgimg.jpg"

const Header = () => {
	const [currentScrollY, setCurrentScrollY] = useState(window.scrollY)

	useEffect(() => {
		const onScroll = () => {
			setCurrentScrollY(window.scrollY)
		}
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const setParallax = {
		transform: `translateY(${currentScrollY / 20}%)`,
	}

	return (
		<div className="relative overflow-hidden w-full h-[600px]">
			<div className="absolute z-20 w-full h-2/3 flex flex-col justify-center items-center text-center gap-y-1">
				<h1 className="text-5xl text-white font-normal">Ideas</h1>
				<p className="text-xl text-white font-normal">
					Where all our great things begin
				</p>
			</div>
			<div className="absolute bg-black/30 w-full h-full z-10" />
			<img
				style={setParallax}
				src={bgimg}
				className="absolute w-full h-[150%] object-cover z-0 transition duration-0"
			/>
			<div className="bg-white w-[300%] md:h-1/2 h-1/3 absolute -bottom-20 -rotate-6 -left-3/4 z-20"></div>
		</div>
	)
}

export default Header
