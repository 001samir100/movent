import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { useGetImageConfigQuery } from "./redux/apis/configureApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeImageConfig } from "./redux/slices/ImageConfigSlice";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Discover from "./pages/discover/Discover";

function App() {
	const { data: imageConfigData } = useGetImageConfigQuery();
	const dispatch = useDispatch();

	useEffect(() => {
		// store image related config to store, like size, width etc.
		if (imageConfigData) {
			const imgConfig = {
				backdrop: imageConfigData.images.secure_base_url + "original",
			};
			dispatch(storeImageConfig(imgConfig));
		}
	}, [imageConfigData, dispatch]);

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/discover/:mediaType" element={<Discover />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
