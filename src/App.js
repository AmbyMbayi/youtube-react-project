import React, { Component } from 'react';
import './App.css';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Sidebar from './containers/SideBar/Sidebar';
import Home from './containers/Home/Home';

export class App extends Component {
	render() {
		return (
			<div>
				<HeaderNav />
				<Sidebar />
				<Home />
			</div>
		);
	}
}

export default App;
