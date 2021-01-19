import React, { Component } from "react";
// import qs from "querystring";

const detailData = [
	{ id: "01", content: "你好，中国🇨🇳" },
	{ id: "02", content: "你好，加拿大🇨🇦" },
	{ id: "03", content: "你好，美国🇺🇸" },
];
export default class Detail extends Component {
	render() {
		// console.log(this.props);
		//接收params参数
		// const { id, title } = this.props.match.params;

		//接收search参数
		// const { search } = this.props.location; //得到的是一个queryString
		// const result = qs.parse(search.slice(1)); //slice(1)去除开头的?
		// const { id, title } = result;

		//接收state参数
		const { id, title } = this.props.location.state || {};
		const findResult =
			detailData.find((detailObj) => {
				return detailObj.id === id;
			}) || {};
		return (
			<ul>
				<li>Id:{id}</li>
				<li>Title:{title}</li>
				<li>Content:{findResult.content}</li>
			</ul>
		);
	}
}
