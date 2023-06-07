import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, TMDB_TOKEN } from "../../utils/Constants";

export const configureApi = createApi({
	reducerPath: "configuration",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["tagType_configuration"],
	endpoints: (builder) => ({
		getImageConfig: builder.query({
			query: () => ({
				url: "/configuration",
				headers: {
					Authorization: "bearer " + TMDB_TOKEN,
					// "Content-Type": "application/json",
				},
			}),
			providesTags: ["tagType_configuration"],
		}),
	}),
});

export const { useGetImageConfigQuery } = configureApi;
