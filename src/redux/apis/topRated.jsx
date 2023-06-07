import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, TMDB_TOKEN } from "../../utils/Constants";

export const topRatedApi = createApi({
	reducerPath: "top_rated",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["top_rated"],
	endpoints: (builder) => ({
		topRated: builder.query({
			query: (topRated) => ({
				url: `/${topRated}/top_rated`,
				headers: { Authorization: "bearer " + TMDB_TOKEN },
			}),
			providesTags: ["top_rated"],
		}),
	}),
});

export const { useTopRatedQuery } = topRatedApi;
