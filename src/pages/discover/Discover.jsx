import { useState } from "react";
import { useDiscoverMoviesTvQuery } from "../../redux/apis/discoverMovieApi";
import { useParams } from "react-router-dom";
import { useGetMoviesQuery } from "../../redux/apis/homeApi";

const Discover = () => {
	const { mediaType } = useParams();
	console.log("Mediatype: " + mediaType);
	const {
		data: moviesData,
		isLoading: moviesLoading,
		isError: isMoviesError,
		error: movieError,
	} = useDiscoverMoviesTvQuery(mediaType);
	return (
		<div className="pt-28 mx-20">
			<div className="flex flex-col sm:flex-row justify-between items-center pb-5">
				<h2>{moviesLoading ? "Loading..." : "Discover"}</h2>
				{/* {isMoviesError && <p>Error: {movieError}</p>} */}
				{moviesData ? <p>Has some data</p> : <p>No data</p>}
				<h3>Filter menus</h3>
			</div>
			<div></div>
		</div>
	);
};

export default Discover;
