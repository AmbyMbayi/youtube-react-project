import React, { Component } from 'react';
import './VideoInfoBox.css';
export class VideoInfoBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true
		};
	}
	onToggleCollapsedButtonClick = () => {
		this.setState((prevState) => {
			return {
				collapsed: !prevState.collapsed
			};
		});
	};
	render() {
		let descriptionTextClass = 'collapsed';
		let buttonTitle = 'show more';

		if (!this.state.collapsed) {
			descriptionTextClass = 'expanded';
			buttonTitle = 'show less';
		}
		return (
			<div>
				<h2>channel Name</h2>
				<p>Thur 24, 2020</p>
				<button>91.5k Subscribes</button>
				<div className={descriptionTextClass}>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
					<p>paraagraph 1</p>
				</div>
				<button compact onClick={this.onToggleCollapsedButtonClick}>
					{buttonTitle}
				</button>
			</div>
		);
	}
}

export default VideoInfoBox;
