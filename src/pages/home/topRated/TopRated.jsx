import { useState } from "react";
import { useTopRatedQuery } from "../../../redux/apis/topRated";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
	const [endPoint, setEndpoint] = useState("movie");
	const handleEndpoint = () => {
		setEndpoint((prevState) => {
			if (prevState === "movie") {
				return "tv";
			} else {
				return "movie";
			}
		});
	};

	const { data, isLoading, isError, error } = useTopRatedQuery(endPoint);
	return (
		<section className="flex flex-col mt-10 ">
			<div className="flex flex-row mx-20 justify-between items-center pb-5">
				<h2>Top Rated</h2>
				<h3
					className="btn btn-warning rounded-full"
					onClick={() => {
						handleEndpoint();
					}}
				>
					{endPoint === "movie" ? "Movies" : "TV Shows"}
				</h3>
			</div>
			<div className="mx-20 overflow-y-scroll">
				{isLoading && <h4>Loading...</h4>}
				{isError && <h4>Error: {error}</h4>}
				{console.log("Trending movies: " + JSON.stringify(data))}
				{data && <Carousel data={data.results} />}
			</div>
			;
		</section>
	);
};

export default TopRated;
