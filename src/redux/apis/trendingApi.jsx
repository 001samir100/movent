import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, TMDB_TOKEN } from "../../utils/Constants";

export const trendingApi = createApi({
	reducerPath: "trending",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["trending"],
	endpoints: (builder) => ({
		getTrendingMovies: builder.query({
			query: (endPoint) => ({
				url: `/trending/movie/${endPoint}`,
				headers: { Authorization: "bearer " + TMDB_TOKEN },
			}),
			providesTags: ["trending"],
		}),
	}),
});
export const { useGetTrendingMoviesQuery } = trendingApi;
