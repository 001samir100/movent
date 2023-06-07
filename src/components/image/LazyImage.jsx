import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ src, style }) => {
	return <LazyLoadImage style={style} src={src} alt="" effect="blur" />;
};

export default LazyImage;
