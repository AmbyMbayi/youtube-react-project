import React, { Component } from 'react';
import './App.css';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Sidebar from './containers/SideBar/Sidebar';

export class App extends Component {
	render() {
		return (
			<div>
				<HeaderNav />
				<Sidebar />
			</div>
		);
	}
}

export default App;
