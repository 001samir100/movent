import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, TMDB_TOKEN } from "../../utils/Constants";

export const discoverMovieApi = createApi({
	reducerPath: "discover_movies",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		headers: { "Access-Control-Allow-Origin": "*" },
	}),
	tagTypes: ["discover_movies"],
	endpoints: (builder) => ({
		discoverMoviesTv: builder.query({
			query: (type) => ({
				url: `/discover/${type}`,
				headers: {
					Authentication: "bearer " + TMDB_TOKEN,
					"Content-Type": "application/json",
				},
			}),
			providesTags: ["discover_movies"],
		}),
	}),
});
export const { useDiscoverMoviesTvQuery } = discoverMovieApi;
