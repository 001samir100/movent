import { useState } from "react";

const MovieCard = ({ data, backdrop }) => {
	// const [bg, setBg] = useState(`${data.backdrop_path} + ${backdrop}`);
	const bg = backdrop + data?.backdrop_path;
	// console.log("Backdrop: " + bg);
	return (
		<div className="relative card card-bordered  w-40 sm:w-60 p-2 m-2  text-center bg-slate-300">
			<img src={bg} loading="lazy" />
			<div className="card-body items-center">
				<h6 className="card-title">
					{data.title || data.name || data.original_name}
				</h6>
				<p>
					<strong>Rating: {data.vote_average}</strong>
				</p>
				<p>Popularity: {data.popularity}</p>
			</div>
		</div>
	);
};

export default MovieCard;
