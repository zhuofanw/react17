import React, { Component } from "react";

export default class Child extends Component {
	state = {
		// users: [
		// 	{ id: "001", name: "Tom", age: 18 },
		// 	{ id: "002", name: "Jerry", age: 19 },
		// 	{ id: "003", name: "Frank", age: 25 },
		// ],
		users: "abc",
	};
	render() {
		return (
			<div>
				<h2>我是Child组件</h2>
				{this.state.users.map((user) => {
					return (
						<h4 key={user.id}>
							我叫:{user.name} --- 年龄是:{user.age}
						</h4>
					);
				})}
			</div>
		);
	}
}
