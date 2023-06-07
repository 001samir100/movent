import axios from "axios";
import { BASE_URL, TMDB_TOKEN } from "../utils/Constants";

const headers = { Authorization: "bearer " + TMDB_TOKEN };

export const fetchDataFromApi = async (url, params) => {
	try {
		const { data } = await axios.get(BASE_URL + url, { headers, params });
		return data;
	} catch (error) {
		console.log(error);
	}
};
