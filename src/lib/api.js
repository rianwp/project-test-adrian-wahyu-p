import axios from "axios"

export const getPosts = async ({ pageNumber, pageSize, sortBy }) => {
	try {
		const response = await axios.get(
			`${
				import.meta.env.VITE_API_URL
			}/ideas?page[number]=${pageNumber}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sortBy}`,
			{
				headers: {
					Accept: "application/json",
				},
			}
		)
		return response.data
	} catch (error) {
		throw error.response.data
	}
}
