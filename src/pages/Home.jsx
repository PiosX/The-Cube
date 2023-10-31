import "./Home.scss";
import Header from "../components/Header";
import Roll from "../components/Roll";
import Cube from "../components/Cube";
import Featured from "../components/Featured";

const Home = () => {
	return (
		<>
			<Header />
			<Roll />
			<Cube />
			<Featured />
		</>
	);
};

export default Home;
