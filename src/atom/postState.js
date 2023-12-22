import { atom } from "recoil"

export const postState = atom({
	key: "postState",
	default: {
		posts: JSON.parse(localStorage.getItem("post"))?.posts || [],
		total: JSON.parse(localStorage.getItem("post"))?.total || 0,
		currentPageNumber: JSON.parse(localStorage.getItem("post"))?.currentPageNumber || 1,
	},
})
