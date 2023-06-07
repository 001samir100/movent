import { useState } from "react";
import { usePopularMovieTVQuery } from "../../../redux/apis/popularApi";
import Carousel from "../../../components/carousel/Carousel";

const WhatsPopular = () => {
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

	const { data, isLoading, isError, error } = usePopularMovieTVQuery(endPoint);
	return (
		<section className="flex flex-col mt-10">
			<div className="flex flex-row mx-20 justify-between items-center pb-5">
				<h2>Popular</h2>
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
				{/* {console.log("Trending movies: " + JSON.stringify(data))} */}
				{data && <Carousel data={data.results} />}
			</div>
		</section>
	);
};

export default WhatsPopular;
