import { useRecoilState, useRecoilValue } from "recoil"
import { filterState } from "../../atom/filterState"
import { useEffect, useState } from "react"
import { postState } from "../../atom/postState"
import { getPosts } from "../../lib/api"
import PostCard from "./PostCard"
import loading from "../../assets/loading.svg"

const ListPost = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState("")
	const filter = useRecoilValue(filterState)
	const [post, setPost] = useRecoilState(postState)

	useEffect(() => {
		const getPostsData = async () => {
			try {
				setIsLoading(true)
				const response = await getPosts({
					pageNumber: post.currentPageNumber,
					pageSize: filter.showPerPage,
					sortBy: filter.sortBy,
					search: filter.search,
				})
				setPost((currentVal) => {
					return {
						...currentVal,
						posts: response?.data,
						total: response?.meta.total,
					}
				})
				setError("")
			} catch (error) {
				setIsLoading(false)
				setError("Terjadi Kesalahan")
			} finally {
				setIsLoading(false)
			}
		}
		getPostsData()
	}, [filter, post.currentPageNumber])

	useEffect(() => {
		localStorage.setItem("post", JSON.stringify(post))
	}, [post])

	return (
		<div className="w-[calc(100%+32px)] -ml-4 flex flex-row flex-wrap mt-4">
			{!isLoading && !error
				? post.posts.map((data, index) => {
						return (
							<PostCard
								key={index}
								img={data?.medium_image[0]?.url}
								publishedAt={data?.published_at}
								title={data?.title}
							/>
						)
				  })
				: null}
			{isLoading || error ? (
				<div className="w-full py-20 flex justify-center items-center">
					{isLoading ? (
						<img src={loading} className="animate-spin w-16 h-16" />
					) : null}
					{error ? <p className="font-medium text-lg">{error}</p> : null}
				</div>
			) : null}
		</div>
	)
}

export default ListPost
