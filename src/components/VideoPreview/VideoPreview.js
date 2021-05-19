import './VideoPreview.css';
import React, { Component } from 'react';

export class VideoPreview extends Component {
	render() {
		return (
			<div>
				<div className="video__preview">
					<div
						className="video__image"
						style={{
							backgroundImage: `url("https://ucarecdn.com/56ad9e87-c8e3-4b5f-8345-106c03f8e9bb/")`
						}}
					/>
					<div className="time__label">
						<span>06:30</span>
					</div>

					<div className="video__info">
						<div className="video__title">
							<h2>High Order Components</h2>
							<i class="bx bx-dots-vertical-rounded vertical__rounded" />
						</div>
						<div className="video__metadata">
							<div
								className="channel__image"
								style={{
									backgroundImage: `url("https://pbs.twimg.com/profile_images/972606960842387457/CdsTvILr_400x400.jpg")`
								}}
							/>
							<div className="channel__info">
								<div className="channel__details">
									<p className="channel__title">React Mastery</p>
								</div>
								<div className="subscription__info">
									<span>2.1M Views </span>
									<span>2 weeks ago</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default VideoPreview;
