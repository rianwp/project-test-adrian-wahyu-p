import { atom } from "recoil"

export const filterState = atom({
	key: "filterState",
	default: {
		sortBy:
			JSON.parse(localStorage.getItem("filter"))?.sortBy || "-published_at",
		showPerPage:
			Number(JSON.parse(localStorage.getItem("filter"))?.showPerPage) || 10,
		search: "",
	},
})
