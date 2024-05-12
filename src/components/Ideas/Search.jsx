const Search = ({ value, onValueChange }) => {
	return (
		<input
			value={value}
			onChange={(e) => onValueChange(e)}
			type="text"
			className="border border-gray-400 rounded-full w-24 py-1 px-2"
			placeholder="Search"
		/>
	)
}

export default Search
