import ReactDOM from "react-dom";
import { Banner } from "./banner";

const App = () => {
	return (
		<div>
			<Banner />
			<h1>This is the react app</h1>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));