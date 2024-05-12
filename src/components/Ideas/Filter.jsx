import { useRecoilState } from "recoil"
import FilterInput from "./FilterInput"
import { filterState } from "../../atom/filterState"
import { useEffect, useState } from "react"
import Search from "./Search"

const showPerPage = [10, 20, 50]
const sortBy = [
	{
		name: "Newest",
		value: "-published_at",
	},
	{
		name: "Oldest",
		value: "published_at",
	},
]

const useDebouncedValue = (inputValue, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(inputValue)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(inputValue)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [inputValue, delay])

	return debouncedValue
}

const Filter = () => {
	const [filter, setFilter] = useRecoilState(filterState)
	const [search, setSearch] = useState("")

	const handleSetFilter = (value, filterName) => {
		setFilter((currentVal) => {
			return {
				...currentVal,
				[filterName]: value,
			}
		})
	}

	const debouncedSearchTerm = useDebouncedValue(search, 500)

	useEffect(() => {
		if (search.length > 3) {
			setFilter((currentVal) => {
				return {
					...currentVal,
					search: search,
				}
			})
		}
	}, [debouncedSearchTerm])

	const handleSearch = (value) => {
		setSearch(value)
	}

	useEffect(() => {
		localStorage.setItem("filter", JSON.stringify(filter))
	}, [filter])

	return (
		<div className="flex flex-row gap-4 flex-wrap justify-end text-right">
			<Search
				value={search}
				onValueChange={(e) => handleSearch(e.target.value)}
			/>
			<FilterInput
				value={filter.showPerPage}
				onValueChange={(e) =>
					handleSetFilter(Number(e.target.value), "showPerPage")
				}
				name="Show per page"
			>
				{showPerPage.map((data, index) => {
					return (
						<option key={index} value={data}>
							{data}
						</option>
					)
				})}
			</FilterInput>
			<FilterInput
				value={filter.sortBy}
				onValueChange={(e) => handleSetFilter(e.target.value, "sortBy")}
				name="Sort by"
			>
				{sortBy.map((data, index) => {
					return (
						<option key={index} value={data.value}>
							{data.name}
						</option>
					)
				})}
			</FilterInput>
		</div>
	)
}

export default Filter
