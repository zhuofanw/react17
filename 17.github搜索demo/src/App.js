import React, { Component } from "react";
import Search from "./component/Search";
import List from "./component/List";

export default class App extends Component {
	state = {
		users: [], //users初始化
		isFirst: true, // 是否为第一次打开页面
		isLoading: false, //是否处于加载中
		err: "",
	};

	//更新App的state
	updateAppState = (stateObj) => {
		this.setState(stateObj);
	};

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState} />
				<List {...this.state} />
			</div>
		);
	}
}
