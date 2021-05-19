import React, { Component } from 'react';
import './App.css';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Sidebar from './containers/SideBar/Sidebar';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Watch from './containers/Watch/Watch';

export class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<HeaderNav />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/watch" component={Watch} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
