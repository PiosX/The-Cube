import "./Composition.scss";

const Composition = () => {
	return (
		<div className="composition">
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
				<div className="composition__content-desc">
					<p className="composition__content-desc-cube">
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
