import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
	// 此处Provider包裹App,目的是让App所有的后代容器组件都能接收到store
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

//检测redux中状态的改变，若redux状态发生改变，则重新渲染App组件
// store.subscribe(() => {
// 	ReactDOM.render(<App />, document.getElementById("root"));
// });
