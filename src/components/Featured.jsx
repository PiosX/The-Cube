import "./Featured.scss";
import arrow from "../assets/arrow.svg";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featured__cubes">
				<div className="featured__cubes-title">FEATURED CUBES</div>
				<div className="featured__cubes-desc">
					<p className="featured__cubes-desc-text">
						FOR A MORE EXTENSIVE COLLECTION OF MY
						<br /> WORK, PLEASE VISIT MY SOCIALS.
					</p>
					<button className="featured__cubes-desc-btn">
						Check <img src={arrow} alt="Arrow" />
					</button>
				</div>
			</div>
			<div className="featured__content">
				<div className="featured__content-mat1">
					<div className="featured__content-mat1-vid"></div>
					<div className="featured__content-mat1-text">
						<p className="featured__content-mat1-text-title mat-title">
							aberration
						</p>
						<p className="featured__content-mat1-text-desc">
							Irregularities and distortions that create visual
							beauty.
						</p>
					</div>
				</div>
				<div className="featured__content-mat2">
					<div className="featured__content-mat2-vid"></div>
					<div className="featured__content-mat2-text">
						<p className="featured__content-mat2-text-title mat-title">
							Coherence
						</p>
						<p className="featured__content-mat2-text-desc">
							Harmoniously interacting to create a uniform and
							coherent shape.
						</p>
					</div>
				</div>
				<div className="featured__content-break"></div>
				<div className="featured__content-mat3">
					<div className="featured__content-mat3-vid"></div>
					<div className="featured__content-mat3-text">
						<p className="featured__content-mat3-text-title mat-title">
							Depth
						</p>
						<p className="featured__content-mat3-text-desc">
							Three-dimensionality, space, and dimension extending
							beyond the surface.
						</p>
					</div>
				</div>
				<div className="featured__content-mat4">
					<div className="featured__content-mat4-vid"></div>
					<div className="featured__content-mat4-text">
						<p className="featured__content-mat4-text-title mat-title">
							Crystallization
						</p>
						<p className="featured__content-mat4-text-desc">
							Light reflections off the surface creating a unique
							texture and appearance.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
