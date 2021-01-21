import React, { Component } from "react";
import { connect } from "react-redux";
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from "../../redux/count_action";

class Count extends Component {
	increment = () => {
		const { value } = this.selectNumber;
		this.props.jia(value * 1);
	};
	decrement = () => {
		const { value } = this.selectNumber;
		this.props.jian(value * 1);
	};
	incrementIfOdd = () => {
		const { value } = this.selectNumber;
		if (this.props.count % 2 !== 0) {
			this.props.jia(value * 1);
		}
	};
	incrementAsync = () => {
		const { value } = this.selectNumber;
		this.props.jiaAsync(value * 1, 500);
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>当前求和为:{this.props.count}</h1>
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
	(state) => ({ count: state }),
	//mapDispatch()一般写法
	// (dispatch) => ({
	// 	jia: (number) => {
	// 		//通知redux执行加法
	// 		dispatch(createIncrementAction(number));
	// 	},
	// 	jian: (number) => {
	// 		//通知redux执行加法
	// 		dispatch(createDecrementAction(number));
	// 	},
	// 	jiaAsync: (number, time) => {
	// 		dispatch(createIncrementAsyncAction(number, time));
	// 	},
	// })
	//mapDispatch()简化写法
	{
		jia: createIncrementAction,
		jian: createDecrementAction,
		jiaAsync: createIncrementAsyncAction,
	}
)(Count);
