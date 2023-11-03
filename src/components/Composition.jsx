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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Composition;
