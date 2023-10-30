import Spline from "@splinetool/react-spline";
import "./Cube.scss";

const Cube = () => {
	return (
		<div className="cube">
			<div className="cube__text">What is a cube?</div>
			<div className="cube__desc">
				A mesmerizing composition where geometric symmetry meets
				expressive colors, creating a work that encourages deeper
				contemplation of the structure and meanings hidden within the
				very shape.
			</div>
			<div className="cube__model">
				<Spline scene="https://prod.spline.design/QrcoWzdWX8bSSQ0T/scene.splinecode" />
			</div>
		</div>
	);
};

export default Cube;
