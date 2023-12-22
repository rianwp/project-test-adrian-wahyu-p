const formatDate = (date) => {
	return date.toLocaleDateString("id-ID", { dateStyle: "long" })
}

export default formatDate
