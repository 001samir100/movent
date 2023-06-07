import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, TMDB_TOKEN } from "../../utils/Constants";

export const popularApi = createApi({
	reducerPath: "popular",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["popular"],
	endpoints: (builder) => ({
		popularMovieTV: builder.query({
			query: (type) => ({
				url: `/${type}/popular`,
				headers: { Authorization: "bearer " + TMDB_TOKEN },
			}),
			providesTags: ["popular"],
		}),
	}),
});
export const { usePopularMovieTVQuery } = popularApi;
