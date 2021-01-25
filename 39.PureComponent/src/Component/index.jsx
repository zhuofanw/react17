import React, { PureComponent } from "react";
import "./index.css";

export default class index extends PureComponent {
	state = { carName: "奔驰C63" };
	changeCar = () => {
		this.setState({ carName: "迈巴赫" });
	};

	// shouldComponentUpdate(nextProps, nextState) {
	// 	// console.log("currentProps:::", this.props, "currentState::", this.state);
	// 	// console.log("nextProps::", nextProps, "nextState:::", nextState);
	// 	return this.state.carName !== nextState.carName;
	// }
	render() {
		console.log("Parent---render");
		const { carName } = this.state;
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				<span>我的车名字是:{carName}</span>
				<br />
				<button onClick={this.changeCar}>点我换车</button>
				<Child carName="奥拓" />
			</div>
		);
	}
}

class Child extends PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log("currentProps:::", this.props, "currentState::", this.state);
	// 	console.log("nextProps::", nextProps, "nextState:::", nextState);
	// 	return this.props.carName !== nextProps.carName;
	// }
	render() {
		console.log("Child---render");

		return (
			<div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是:{this.props.carName}</span>
			</div>
		);
	}
}
