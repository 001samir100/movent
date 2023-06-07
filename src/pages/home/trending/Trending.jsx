import { useState } from "react";
import { useGetTrendingMoviesQuery } from "../../../redux/apis/trendingApi";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
	const [endPoint, setEndpoint] = useState("day");
	const handleEndpoint = () => {
		setEndpoint((prevState) => {
			if (prevState === "day") {
				return "week";
			} else {
				return "day";
			}
		});
	};
	const {
		data: trendingMovies,
		isLoading,
		isError,
		error,
	} = useGetTrendingMoviesQuery(endPoint);
	return (
		<section className="flex flex-col mt-10">
			<div className="flex flex-row mx-20 justify-between items-center pb-5">
				<h2>Trending</h2>
				<h3
					className="btn btn-warning rounded-full"
					onClick={() => {
						handleEndpoint();
					}}
				>
					{endPoint}
				</h3>
			</div>
			<div className="mx-20 overflow-y-scroll">
				{isLoading && <h4>Loading...</h4>}
				{isError && <h4>Error: {error}</h4>}
				{/* {console.log("Trending movies: " + JSON.stringify(trendingMovies))} */}
				{trendingMovies && <Carousel data={trendingMovies.results} />}
			</div>
		</section>
	);
};

export default Trending;
