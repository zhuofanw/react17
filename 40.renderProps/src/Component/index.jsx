import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
	render() {
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				<A render={(name) => <B name={name} />} />
			</div>
		);
	}
}

class A extends PureComponent {
	state = { name: "tom" };
	render() {
		const { name } = this.state;
		return (
			<div className="a">
				<h3>我是A组件</h3>
				{this.props.render(name)}
			</div>
		);
	}
}

class B extends PureComponent {
	render() {
		return (
			<div className="b">
				<h3>我是B组件,我的名字是{this.props.name}</h3>
			</div>
		);
	}
}
