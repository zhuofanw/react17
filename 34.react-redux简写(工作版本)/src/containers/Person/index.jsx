import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { AddPerson } from "../../redux/actions/person";
class Person extends Component {
	addPerson = () => {
		const name = this.nameNode.value;
		const age = this.ageNode.value * 1;
		const personObj = { id: nanoid(), name, age };
		this.props.AddPerson(personObj);
		this.nameNode.value = "";
		this.ageNode.value = "";
	};
	render() {
		return (
			<div>
				<h2>我是Person组件,上方组件求和为{this.props.total}</h2>
				<input
					ref={(c) => (this.nameNode = c)}
					type="text"
					placeholder="输入名字"
				/>
				<input
					ref={(c) => (this.ageNode = c)}
					type="text"
					placeholder="输入年龄"
				/>
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{this.props.peopleArr.map((person) => {
						return (
							<li key={person.id}>
								{person.name}---
								{person.age}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default connect(
	//映射状态state
	(state) => ({
		peopleArr: state.person,
		total: state.count,
	}),
	//映射状态的操作方法action
	{
		AddPerson,
	}
)(Person);
