import React, { Component } from "react";

const detailData = [
	{ id: "01", content: "你好，中国🇨🇳" },
	{ id: "02", content: "你好，加拿大🇨🇦" },
	{ id: "03", content: "你好，美国🇺🇸" },
];
export default class Detail extends Component {
	render() {
		const { id, title } = this.props.match.params;
		const findResult = detailData.find((detailObj) => {
			return detailObj.id === id;
		});
		return (
			<ul>
				<li>Id:{id}</li>
				<li>Title:{title}</li>
				<li>Content:{findResult.content}</li>
			</ul>
		);
	}
}
