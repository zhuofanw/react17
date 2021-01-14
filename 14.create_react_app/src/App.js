import React, { Component } from "react";
import Hello from "./components/Hello/index";
import Welcome from "./components/Welcome/index";
export default class App extends Component {
	render() {
		return (
			<div>
				<Hello />
				<Welcome />
			</div>
		);
	}
}
