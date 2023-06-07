import HeroBanner from "./heroBanner/HeroBanner";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";
import WhatsPopular from "./whatsPopular/WhatsPopular";

const Home = () => {
	return (
		<div className="relative">
			<HeroBanner />
			<Trending />
			<WhatsPopular />
			<TopRated />
		</div>
	);
};

export default Home;
