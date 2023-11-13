import { useRef, useEffect, useState } from "react";
import useOnScreen from "./hooks/useOnScreen";
import cn from "classnames";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import "./Composition.scss";

const Composition = () => {
	const ref = useRef(null);

	const [reveal, setReveal] = useState(false);
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) setReveal(onScreen);
	}, [onScreen]);

	useEffect(() => {
		if (reveal) {
			let splitText = new SplitText(".composition__content-desc-cube", {
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
			className={cn("composition", { "is-reveal": reveal })}
			data-scroll-section
		>
			<div className="composition__title">COMPOSITION</div>
			<div className="composition__content">
				<div className="composition__content-cube">
					<p className="composition__content-cube-text">CUBE</p>
				</div>
				<div className="composition__content-materials">
					<p className="composition__content-materials-text">
						MATERIALS
					</p>
				</div>
				<div className="composition__content-effects">
					<p className="composition__content-effects-text">EFFETCS</p>
				</div>
				<div className="composition__content-desc" data-scroll>
					<p
						className={cn("composition__content-desc-cube", {
							"is-reveal": reveal,
						})}
						ref={ref}
					>
						An abstract masterpiece that focuses on simplicity and
						elegance. This geometric shape is perfectly symmetrical,
						with all of its sides being of equal length.
					</p>
					{/* <p className="composition__content-desc-material">
						The abstract material used in my cube gives it an
						extraordinary texture and subtle luminous effects,
						creating a fascinating illusion of three-dimensional
						depth.
					</p> */}
					{/* <p className="composition__content-desc-effect">
						The fascinating luminescent effect with a touch of
						chromatic aberration blends the cube into one perfect
						masterpiece.
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default Composition;
