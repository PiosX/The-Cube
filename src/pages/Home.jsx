import "./Home.scss";
import Header from "../components/Header";
import Roll from "../components/Roll";
import Cube from "../components/Cube";
import Featured from "../components/Featured";
import Composition from "../components/Composition";
import Slides from "../components/Slides";
import Outcomes from "../components/Outcomes";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Header />
			<Roll />
			<Cube />
			<Featured />
			<Composition />
			<Slides />
			<Outcomes />
			<Footer />
		</div>
	);
};

export default Home;
