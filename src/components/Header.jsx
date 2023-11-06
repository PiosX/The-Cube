import "./Header.scss";
import arrow from "../assets/arrow.svg";
import cube from "../assets/cube.svg";
import material from "../assets/material.svg";
import effect from "../assets/effect.svg";
// import var1 from "../assets/var1.png";
// import var2 from "../assets/var2.png";
import Spline from "@splinetool/react-spline";

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<div className="header__logo-cube"></div>
				<p className="header__logo-text">The Cube</p>
			</div>
			<div className="header__nav">
				<div className="header__nav-mobile"></div>
				<div className="header__nav-cube nav-btn">Cube</div>
				<div className="header__nav-highlighted nav-btn">
					Highlighted
				</div>
				<div className="header__nav-outcomes nav-btn">Outcomes</div>
			</div>
			<div className="header__content">
				<div className="header__content-title">
					<div className="header__content-title-subtitle">
						Sculpting the Future with Tech Cubes
					</div>
					<div className="header__content-title-main">
						Leading the Way in Immaculate Cubes
					</div>
					<button className="header__content-title-btn">
						Explore
						<img src={arrow} alt="Arrow" />
					</button>
					<div className="header__content-title-assets">
						<div className="header__content-title-assets-icons">
							<img src={cube} alt="cube" />
							<img src={material} alt="material" />
							<img src={effect} alt="effect" />
						</div>
						{/* <div className="header__content-title-assets-collection">
							<div className="header__content-title-assets-collection-first">
								<img src={var1} alt="cube variant 1" />
							</div>
							<div className="header__content-title-assets-collection-second">
								<img src={var2} alt="cube variant 2" />
							</div>
						</div> */}
					</div>
				</div>
				<div className="header__content-cube">
					<div className="header__content-cube-model">
						<Spline scene="https://prod.spline.design/U89KGrUit-JiPZpa/scene.splinecode" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
