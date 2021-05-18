import './Home.css';

import React, { Component } from 'react';

import VideoGrid from '../../components/VideoGrid/VideoGrid';

export class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="grid__items">
					<VideoGrid title="Trending" />
					<VideoGrid title="Programming and Videography" />
				</div>
			</div>
		);
	}
}

export default Home;
