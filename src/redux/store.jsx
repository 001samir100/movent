import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./apis/homeApi";
import { configureApi } from "./apis/configureApi";
import { trendingApi } from "./apis/trendingApi";
import { popularApi } from "./apis/popularApi";
import { topRatedApi } from "./apis/topRated";
import { discoverMovieTvApi } from "./apis/discoverMovieTvApi";
import imageConfigReducer from "./slices/ImageConfigSlice";

export const store = configureStore({
	reducer: {
		[homeApi.reducerPath]: homeApi.reducer,
		[configureApi.reducerPath]: configureApi.reducer,
		[trendingApi.reducerPath]: trendingApi.reducer,
		[popularApi.reducerPath]: popularApi.reducer,
		[topRatedApi.reducerPath]: topRatedApi.reducer,
		[discoverMovieTvApi.reducerPath]: discoverMovieTvApi.reducer,
		imageConfigReducer: imageConfigReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(homeApi.middleware)
			.concat(configureApi.middleware)
			.concat(trendingApi.middleware)
			.concat(popularApi.middleware)
			.concat(topRatedApi.middleware)
			.concat(discoverMovieTvApi.middleware),
});
