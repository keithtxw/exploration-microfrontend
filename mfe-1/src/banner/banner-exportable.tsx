import ReactDOM from "react-dom";
import { Banner } from "./banner";

export const init = (domElement: any) => {
	return {
		render: () => {
			ReactDOM.render(<Banner />, domElement);
		},

		unmount: () => {
			if (domElement) {
				ReactDOM.unmountComponentAtNode(domElement);
			}
		}
	}
};