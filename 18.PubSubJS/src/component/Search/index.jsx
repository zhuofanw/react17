import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
	search = () => {
		// 获取用户的输入(连续解构赋值 + 重命名);
		const {
			userName: { value: searchName },
		} = this;

		PubSub.publish("githubUsers", {
			isFirst: false,
			isLoading: true,
		});

		// 发送网络请求;
		axios.get(`api1/search/users?q=${searchName}`).then(
			(response) => {
				PubSub.publish("githubUsers", {
					isLoading: false,
					users: response.data.items,
				});
			},
			(error) => {
				PubSub.publish("githubUsers", {
					isLoading: false,
					err: error.message,
				});
			}
		);
	};
	render() {
		return (
			<div>
				<section className="jumbotron">
					<h3 className="jumbotron-heading">Search Github Users</h3>
					<div>
						<input
							ref={(c) => (this.userName = c)}
							type="text"
							placeholder="enter the name you search"
						/>
						&nbsp;
						<button onClick={this.search}>Search</button>
					</div>
				</section>
			</div>
		);
	}
}
