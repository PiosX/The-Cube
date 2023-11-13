import { useRef, useEffect, useState } from "react";
import cn from "classnames";
import useOnScreen from "./hooks/useOnScreen";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import "./Cube.scss";

const Cube = () => {
	const ref = useRef(null);

	const [reveal, setReveal] = useState(false);
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) setReveal(onScreen);
	}, [onScreen]);

	useEffect(() => {
		if (reveal) {
			let splitText = new SplitText(".cube__desc-text", {
				type: "chars",
			});
			let chars = splitText.chars;

			gsap.from(chars, {
				y: -100,
				opacity: 0,
				stagger: 0.01,
				ease: "back.out",
				duration: 0.5,
				delay: 0.3,
			});
		}
	}, [reveal]);
	return (
		<div
			className={cn("cube", { "is-reveal": reveal })}
			data-scroll-section
		>
			<div className="cube__text">What is a cube?</div>
			<div className="cube__desc" data-scroll>
				<p
					className={cn("cube__desc-text", { "is-reveal": reveal })}
					ref={ref}
				>
					A mesmerizing composition where geometric symmetry meets
					expressive colors, creating a work that encourages deeper
					contemplation of the structure and meanings hidden within
					the very shape.
				</p>
			</div>
			<div className="cube__model">
				<Spline scene="https://prod.spline.design/QrcoWzdWX8bSSQ0T/scene.splinecode" />
			</div>
		</div>
	);
};

export default Cube;
