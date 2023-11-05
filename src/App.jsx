import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Home from "./pages/Home";

function App() {
	const ref = useRef(null);

	const options = {
		smooth: true,
	};
	return (
		<LocomotiveScrollProvider options={options} containerRef={ref}>
			<main data-scroll-container ref={ref}>
				<Home />
			</main>
		</LocomotiveScrollProvider>
	);
}

export default App;
