import "./App.css";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import SubCard from "./components/SubCard";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<main>
				<SubCard />
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<a className="App-link" href="#">
						Find a Publix near you
					</a>
				</div>
				<Notification />
			</main>
		</div>
	);
}

export default App;
