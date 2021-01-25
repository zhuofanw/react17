import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
// import Home from "./component/Home";
// import About from "./component/About";
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<h2>React Router Demo</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 在react中靠路由连接实现切换组件--编写路由链接*/}

							<NavLink className="list-group-item" to="/about">
								About
							</NavLink>
							<NavLink className="list-group-item" to="/home">
								Home
							</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Suspense fallback={<h1>Loading...</h1>}>
									<Route path="/about" component={About} />
									<Route path="/home" component={Home} />
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
