import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

store.subcribe(() => {
	ReactDOM.render(<App />, document.getElementById("root"));
});
