import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, TMDB_TOKEN } from "../../utils/Constants";

export const discoverMovieTvApi = createApi({
	reducerPath: "discover_movie_tv",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["discover_movie_tv"],
	endpoints: (builder) => ({
		discoverMoviesTv: builder.query({
			query: (endPoint) => ({
				url: `/discover/${endPoint}`,
				headers: { Authorization: "bearer " + TMDB_TOKEN },
			}),
			providesTags: ["discover_movie_tv"],
		}),
		fetchMovieTvGenre: builder.query({
			query: (mediaType) => ({
				url: `/genre/${mediaType}/list`,
				headers: { Authorization: "bearer " + TMDB_TOKEN },
			}),
			providesTags: ["discover_movie_tv"],
		}),
		filterFetchMovesTv: builder.mutation({
			// console.log("FilterFetchMoviesTv called...")
			query: (endPoint, filter) => ({
				url: `/discover/${endPoint}`,
				method: "GET",
				headers: { Authorization: "bearer " + TMDB_TOKEN },
				params: { filter },
			}),
			providesTags: ["discover_movie_tv"],
		}),
	}),
});
export const {
	useDiscoverMoviesTvQuery,
	useFetchMovieTvGenreQuery,
	useFilterFetchMovesTvMutation,
} = discoverMovieTvApi;
