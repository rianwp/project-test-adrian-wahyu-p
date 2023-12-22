import Header from "../components/Ideas/Header"
import Container from "../components/Container"
import Filter from "../components/Ideas/Filter"
import ListPost from "../components/Ideas/ListPost"
import ShowingData from "../components/Ideas/ShowingData"
import Pagination from "../components/Ideas/Pagination"

const Ideas = () => {
	return (
		<div>
			<Header />
			<Container>
				<div className="flex flex-row justify-between">
					<ShowingData />
					<Filter />
				</div>
				<ListPost />
				<Pagination />
			</Container>
		</div>
	)
}

export default Ideas
