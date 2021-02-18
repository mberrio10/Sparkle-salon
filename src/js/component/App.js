import React from "react";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Views/Home";
import { Gallery } from "./Views/Gallery";
import { Hair } from "./Views/Hair";
import { Nails } from "./Views/Nails";
import { Contact } from "./Views/Contact";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route exact path="/" component={Home} />
					<Route path="/gallery" component={Gallery} />
					<Route path="/hair" component={Hair} />
					<Route path="/nails" component={Nails} />
					<Route path="/contact" component={Contact} />
				</div>
			</BrowserRouter>
		);
	}
}
