import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import "./Slides.scss";

const Slides = () => {
	return (
		<div className="slides">
			<div className="slides__img">
				<img
					src={slide1}
					alt="Abstract Cube"
					className="slides__img-img"
				/>
			</div>
			<div className="slides__img">
				<img
					src={slide2}
					alt="Abstract Cubes"
					className="slides__img-img"
				/>
			</div>
			<div className="slides__img">
				<img
					src={slide3}
					alt="Abstract Cube"
					className="slides__img-img"
				/>
			</div>
		</div>
	);
};

export default Slides;
