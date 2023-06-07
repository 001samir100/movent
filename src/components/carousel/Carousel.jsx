import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
// This Carousel component is used for Trending, Popular, Top-rated section
const Carousel = ({ data }) => {
	const { backdrop } = useSelector(
		(state) => state.imageConfigReducer.imgConfigDetails
	);
	return (
		<div className="flex flex-row overflow-y-scroll space-x-4">
			{data.map((movie) => {
				let formattedDate = "";
				if (movie.release_date !== null && movie.release_date !== undefined) {
					formattedDate = dayjs(movie.release_date).format("MMM D, YYYY");
				}
				return (
					<div className="carousel-item flex-col w-64" key={movie.id}>
						<LazyLoadImage
							src={backdrop + movie.backdrop_path}
							style={{ width: "250px", height: "300px", objectFit: "cover" }}
							className="rounded-tr-3xl rounded-tl-3xl"
						/>

						<strong>
							<h4 className="text-ellipsis overflow-hidden">
								{movie.title || movie.name}
							</h4>
						</strong>
						<h5>Rating: {movie.vote_average}</h5>
						{movie.release_date && <h5>Released: {formattedDate}</h5>}
					</div>
				);
			})}
		</div>
	);
};

export default Carousel;
