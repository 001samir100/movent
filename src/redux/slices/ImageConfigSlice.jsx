import { createSlice } from "@reduxjs/toolkit";

export const ImageConfigSlice = createSlice({
	name: "image_config",
	initialState: {
		imgConfigDetails: {},
	},
	reducers: {
		storeImageConfig: (state, action) => {
			state.imgConfigDetails = action.payload;
		},
	},
});
export const { storeImageConfig } = ImageConfigSlice.actions;

export default ImageConfigSlice.reducer;
