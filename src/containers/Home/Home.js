import './Home.css';

import React, { Component } from 'react';

import VideoGrid from '../../components/VideoGrid/VideoGrid';
import Sidebar from '../SideBar/Sidebar';
import HeaderNav from '../HeaderNav/HeaderNav';

export class Home extends Component {
	render() {
		return (
			<div>
				<HeaderNav />

				<Sidebar />
				<div className="home">
					<div className="grid__items">
						<VideoGrid title="Trending" />
						<VideoGrid title="Programming and Videography" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
