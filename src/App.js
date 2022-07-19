import Home from "./pages/Home";
import Events from "./pages/Events";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
