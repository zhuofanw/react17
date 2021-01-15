import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

export default class App extends Component {
	//初始化状态
	state = {
		todos: [
			{ id: 1, name: "吃饭", done: true },
			{ id: 2, name: "睡觉", done: true },
			{ id: 3, name: "写代码", done: false },
			{ id: 4, name: "玩游戏", done: false },
		],
	};

	//addTodo用于添加一个todo,接收的参数是todo对象
	addTodo = (todoObj) => {
		//获取原todos
		const { todos } = this.state;
		//追加一个todo
		const newTodos = [todoObj, ...todos];
		this.setState({
			todos: newTodos,
		});
	};
	//updateTodo用于更新一个todo对象
	updateTodo = (id, done) => {
		const { todos } = this.state;
		//加工数据,将input是否checked更新到todos上
		const newTodos = todos.map((todo) => {
			if (todo.id === id) return { ...todo, done };
			else return todo;
		});
		this.setState({
			todos: newTodos,
		});
	};
	//回调函数
	deleteTodo = (id) => {
		const { todos } = this.state;
		const newTodos = todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos: newTodos,
		});
	};
	//全选 全反选
	checkAllTodo = (done) => {
		const { todos } = this.state;
		const newTodos = todos.map((todo) => {
			return { ...todo, done };
		});
		this.setState({
			todos: newTodos,
		});
	};
	clearAllDonejobs = () => {
		const { todos } = this.state;
		const newTodos = todos.filter((todo) => {
			return todo.done === false;
		});
		this.setState({
			todos: newTodos,
		});
	};
	render() {
		const { todos } = this.state;
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List
						todos={todos}
						updateTodo={this.updateTodo}
						deleteTodo={this.deleteTodo}
					/>
					<Footer
						todos={todos}
						checkAllTodo={this.checkAllTodo}
						clearAllDonejobs={this.clearAllDonejobs}
					/>
				</div>
			</div>
		);
	}
}
