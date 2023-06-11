import { useCallback, useEffect, useState } from "react";
import {
	useDiscoverMoviesTvQuery,
	useFetchMovieTvGenreQuery,
	useFilterFetchMovesTvMutation,
} from "../../redux/apis/discoverMovieTvApi";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/movieCard/MovieCard";
import { useSelector } from "react-redux";
import Select from "react-select";
import { fetchDataFromApi } from "../../api/Api";

let filter = {};

const Discover = () => {
	// const [pageNum, setPageNum] = useState(1);
	const [genre, setGenre] = useState(null);
	const [data, setData] = useState(null);
	const [pageNum, setPageNum] = useState(1);

	const { mediaType } = useParams();
	// It provides base url for image fetching...
	const { backdrop } = useSelector(
		(state) => state.imageConfigReducer.imgConfigDetails
	);

	const fetchInitialData = useCallback(() => {
		// setLoading(true);
		fetchDataFromApi(`/discover/${mediaType}`, filter).then((res) => {
			setData(res);
			setPageNum((prev) => prev + 1);
			// setLoading(false);
		});
	}, [mediaType]);

	const {
		data: genreData,
		isLoading: genreIsLoading,
		isError: genreIsError,
		error: genreError,
	} = useFetchMovieTvGenreQuery(mediaType);

	// const [filterFetchMovesTv] = useFilterFetchMovesTvMutation();

	useEffect(() => {
		filter = {};
		setData(null);
		setPageNum(1);
		// setSortby(null);
		setGenre(null);
		fetchInitialData();
	}, [fetchInitialData]);

	//selectedItems" store data that is selected and "action" store name given to component
	const onChange = (selectedItems, action) => {
		if (action.name === "genre") {
			setGenre(selectedItems);
			if (action.action !== "clear") {
				let genreId = selectedItems.map((g) => g.id);
				genreId = JSON.stringify(genreId).slice(1, -1);
				filter.with_genres = genreId;
			} else {
				delete filter.with_genres;
			}
		}

		setPageNum(1);
		fetchInitialData();
	};
	return (
		<div className="pt-28 mx-20">
			<div className="flex flex-col sm:flex-row justify-between items-center pb-5">
				<h2>{"Discover"}</h2>
				<div className="flex gap-4">
					<Select
						isMulti
						name="genre"
						value={genre}
						placeholder="Select genres"
						closeMenuOnSelect={false}
						options={genreIsLoading ? "loading..." : genreData?.genres}
						getOptionLabel={(option) => option.name}
						getOptionValue={(option) => option.id}
						onChange={onChange}
					/>
					{/* <Select placeholder="Sort By" closeMenuOnSelect={false} /> */}
				</div>
			</div>

			{data ? (
				<div className="flex flex-wrap flex-grow-1 flex-shrink-1 justify-center">
					{/* {console.log("MOvies Discover:" + JSON.stringify(moviesData))} */}
					{data?.results?.map((movie) => {
						return (
							<MovieCard key={movie.id} data={movie} backdrop={backdrop} />
						);
					})}
				</div>
			) : (
				<h4>Sorry! data not found</h4>
			)}
		</div>
	);
};

export default Discover;
