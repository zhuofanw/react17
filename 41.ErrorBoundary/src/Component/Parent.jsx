import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
	state = {
		hasError: "", //用于标识子组件是否产生错误
	};

	static getDerivedStateFromError(error) {
		console.log(error);
		return { hasError: error };
	}
	componentDidCatch() {
		console.log("统计错误此处,反馈给服务器，用于通知编码人员进行bug解决");
	}
	render() {
		return (
			<div>
				<h2>我是Parent组件</h2>
				{this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}
			</div>
		);
	}
}
