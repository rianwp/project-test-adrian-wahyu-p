import { useRecoilValue } from "recoil"
import { postState } from "../../atom/postState"
import { filterState } from "../../atom/filterState"

const ShowingData = () => {
	const filter = useRecoilValue(filterState)
	const post = useRecoilValue(postState)

	const firstData =
		filter.showPerPage * post.currentPageNumber - (filter.showPerPage - 1)

	const lastData =
		filter.showPerPage * post.currentPageNumber > post.total
			? post.total
			: filter.showPerPage * post.currentPageNumber
	return (
		<p>
			Showing {firstData} - {lastData} of {post.total}
		</p>
	)
}

export default ShowingData
