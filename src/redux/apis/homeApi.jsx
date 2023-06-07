import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, TMDB_TOKEN } from "../../utils/Constants";

export const homeApi = createApi({
	reducerPath: "home",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ["tagType_home"],
	endpoints: (builder) => ({
		upcomingMovies: builder.query({
			query: () => ({
				url: "/movie/upcoming",
				headers: {
					Authorization: "bearer " + TMDB_TOKEN,
					"Content-Type": "application/json",
				},
			}),
			providesTags: ["tagType_home"],
		}),
		getMovies: builder.query({
			query: () => ({
				url: "/movie/now_playing",
				headers: {
					Authorization: "bearer " + TMDB_TOKEN,
					"Content-Type": "application/json",
				},
				// params: {
				// 	page: params.page,
				// 	limit: params.limit,
				// },
			}),
			//TODO what does transformResponse do?
			// transformResponse: (response) => response.data,
			providesTags: ["tagType_home"],
		}),
	}),
});

export const { useUpcomingMoviesQuery, useGetMoviesQuery } = homeApi;
