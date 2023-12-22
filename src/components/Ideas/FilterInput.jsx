const FilterInput = ({ name, children, onValueChange, value }) => {
	return (
		<div className="flex flex-row gap-2 items-center">
			<label>{name}:</label>
			<select
				value={value}
				onChange={(e) => onValueChange(e)}
				className="border border-gray-400 rounded-full w-24 py-1 px-2"
			>
				{children}
			</select>
		</div>
	)
}

export default FilterInput
