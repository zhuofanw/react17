import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Increment,
	Decrement,
	IncrementAsync,
} from "../../redux/actions/count";

class Count extends Component {
	increment = () => {
		const { value } = this.selectNumber;
		this.props.Increment(value * 1);
	};
	decrement = () => {
		const { value } = this.selectNumber;
		this.props.Decrement(value * 1);
	};
	incrementIfOdd = () => {
		const { value } = this.selectNumber;
		if (this.props.count % 2 !== 0) {
			this.props.Increment(value * 1);
		}
	};
	incrementAsync = () => {
		const { value } = this.selectNumber;
		this.props.IncrementAsync(value * 1, 500);
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<h2>我是Count组件</h2>
				<h4>
					当前求和为:{this.props.total},下方组件总人数为
					{this.props.peopleLength}
				</h4>
				<select ref={(c) => (this.selectNumber = c)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		);
	}
}

//创建并暴露一个Count的容器组件并与redux连接
export default connect(
	(state) => ({
		total: state.count,
		peopleLength: state.person.length,
	}),
	{
		Increment,
		Decrement,
		IncrementAsync,
	}
)(Count);
