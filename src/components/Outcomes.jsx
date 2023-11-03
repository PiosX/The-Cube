import "./Outcomes.scss";

const Outcomes = () => {
	return (
		<div className="outcomes">
			<div className="outcomes__title">Outcomes</div>
			<div className="outcomes__content">
				<div className="outcomes__content-stat">
					<div className="outcomes__content-stat-above">Above</div>
					<div className="outcomes__content-stat-num">
						<p className="outcomes__content-stat-num-text">78</p>
						<p className="outcomes__content-stat-num-desc">
							Used Cubes
						</p>
					</div>
				</div>
				<div className="outcomes__content-stat">
					<div className="outcomes__content-stat-above">Above</div>
					<div className="outcomes__content-stat-num">
						<p className="outcomes__content-stat-num-text">472</p>
						<p className="outcomes__content-stat-num-desc">
							Transformed Cubes
						</p>
					</div>
				</div>
				<div className="outcomes__content-stat">
					<div className="outcomes__content-stat-above">Above</div>
					<div className="outcomes__content-stat-num">
						<p className="outcomes__content-stat-num-text">21</p>
						<p className="outcomes__content-stat-num-desc">
							Sold Projects
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Outcomes;
