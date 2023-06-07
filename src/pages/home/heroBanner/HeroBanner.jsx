import { useSelector } from "react-redux";
import { useUpcomingMoviesQuery } from "../../../redux/apis/homeApi";
import { useEffect, useState } from "react";
import LazyImage from "../../../components/image/LazyImage";

const HeroBanner = () => {
	const [background, setBackground] = useState("");

	const { backdrop } = useSelector(
		(state) => state.imageConfigReducer.imgConfigDetails
	);

	const {
		data: upcomingMovieData,
		isLoading: upcomingMovieLoading,
		isError: isUpcomingMovieError,
		error: upcomingMovieError,
	} = useUpcomingMoviesQuery();

	useEffect(() => {
		const bg =
			backdrop +
			upcomingMovieData?.results?.[Math.floor(Math.random() * 20)]
				?.backdrop_path;

		setBackground(bg);
	}, [backdrop, upcomingMovieData]);

	return (
		<section className="relative flex flex-col justify-center items-center h-screen">
			<div className="absolute -z-10 ">
				<LazyImage
					src={background}
					style={{ objectFit: "cover", width: "100vw", height: "100vh" }}
				/>
			</div>

			<div className="relative">
				<div className="mx-10 text-center">
					<h1 className=" sm:text-md">Best site for Movies and TV Series...</h1>
				</div>{" "}
				<br />
				<br />
				<div className="text-center">
					<input
						placeholder="Type here"
						type="search"
						className="input input-lg border-b-orange-500 rounded-full input-accent w-80 sm:w-128"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
