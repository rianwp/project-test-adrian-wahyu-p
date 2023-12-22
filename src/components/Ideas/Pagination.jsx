import { useRecoilState, useRecoilValue } from "recoil"
import { postState } from "../../atom/postState"
import { filterState } from "../../atom/filterState"
import chevron_left from "../../assets/chevron-left.svg"
import chevron_double_left from "../../assets/chevron-double-left.svg"
import chevron_right from "../../assets/chevron-right.svg"
import chevron_double_right from "../../assets/chevron-double-right.svg"

const Pagination = () => {
	const [post, setPost] = useRecoilState(postState)
	const filter = useRecoilValue(filterState)

	const maxPage = Math.ceil(post.total / filter.showPerPage)
	const maxShowedPage = 4

	const handleNext = () => {
		if (post.currentPageNumber + maxShowedPage <= maxPage) {
			setPost((currentVal) => {
				return {
					...currentVal,
					currentPageNumber: currentVal.currentPageNumber + maxShowedPage,
				}
			})
		}
	}
	const handleBack = () => {
		if (post.currentPageNumber > 1) {
			setPost((currentVal) => {
				return {
					...currentVal,
					currentPageNumber: currentVal.currentPageNumber - 1,
				}
			})
		}
	}
	return (
		<div className="flex flex-row gap-2 items-center py-4 mx-auto w-fit">
			<button
				className={`w-6 h-6 ${
					post.currentPageNumber === 1 ? "opacity-30" : ""
				}`}
				onClick={() =>
					setPost((currentVal) => {
						return {
							...currentVal,
							currentPageNumber: 1,
						}
					})
				}
			>
				<img src={chevron_double_left} className="w-full h-full" />
			</button>
			<button
				className={`w-6 h-6 ${
					post.currentPageNumber === 1 ? "opacity-30" : ""
				}`}
				onClick={handleBack}
			>
				<img src={chevron_left} className="w-full h-full" />
			</button>
			{[...Array(maxShowedPage)].map((data, index) => {
				if (index + post.currentPageNumber <= maxPage) {
					return (
						<button
							onClick={() =>
								setPost((currentVal) => {
									return {
										...currentVal,
										currentPageNumber: post.currentPageNumber + index,
									}
								})
							}
							className={`w-8 h-8 rounded-lg hover:text-white hover:bg-primary hover:border-none transition duration-300 ${
								index === 0 ? "bg-primary text-white" : "border border-gray-400"
							} `}
							key={index}
						>
							{post.currentPageNumber + index}
						</button>
					)
				}
			})}
			<button
				className={`w-6 h-6 ${
					post.currentPageNumber + maxShowedPage > maxPage ? "opacity-30" : ""
				}`}
				onClick={handleNext}
			>
				<img src={chevron_right} className="w-full h-full" />
			</button>
			<button
				className={`w-6 h-6 ${
					post.currentPageNumber === maxPage ? "opacity-30" : ""
				}`}
				onClick={() =>
					setPost((currentVal) => {
						return {
							...currentVal,
							currentPageNumber: maxPage,
						}
					})
				}
			>
				<img src={chevron_double_right} className="w-full h-full" />
			</button>
		</div>
	)
}

export default Pagination
