import "./Home.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Roll from "../components/Roll";
import Cube from "../components/Cube";
import Featured from "../components/Featured";
import Composition from "../components/Composition";
import Slides from "../components/Slides";
import Outcomes from "../components/Outcomes";
import Footer from "../components/Footer";
import useLocoScroll from "../components/hooks/useLocoScroll";

const Home = () => {
	const ref = useRef(null);
	const [preloader, setPreload] = useState(true);

	useLocoScroll(!preloader);

	useEffect(() => {
		if (!preloader && ref) {
			if (typeof window === "undefined" || !window.document) {
				return;
			}
		}
	}, [preloader]);

	const [timer, setTimer] = useState(3);

	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreload(false);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((time) => time - 1);
		}, 1000);
		return () => clear();
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	if (typeof window === "undefined" || !window.document) {
		return null;
	}
	return (
		<main
			data-scroll-container
			className="main-container"
			id="main-container"
			ref={ref}
		>
			<Header />
			<Roll />
			<Cube />
			<Featured />
			<Composition />
			<Slides />
			<Outcomes />
			<Footer />
		</main>
	);
};

export default Home;
