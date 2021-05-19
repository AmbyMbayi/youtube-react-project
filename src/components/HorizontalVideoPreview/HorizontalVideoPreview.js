import './HorizontalVideoPreview.css';
import React, { Component } from 'react';

export class HorizontalVideoPreview extends Component {
	render() {
		return (
			<div>
				<div className="horizontal-video__preview">
					<div
						className="horizontal-video__image"
						style={{
							backgroundImage: `url("https://ucarecdn.com/56ad9e87-c8e3-4b5f-8345-106c03f8e9bb/")`
						}}
					/>
					<div className="horizontal-time__label">
						<span>06:30</span>
					</div>

					<div className="horizontal-video__info">
						<div className="horizontal-video__title">
							<h2>High Order Components</h2>
							<i class="bx bx-dots-vertical-rounded vertical__rounded" />
						</div>
						<div className="horizontal-video__metadata">
							<div className="horizontal-channel__info">
								<div className="horizontal-channel__details">
									<p className="horizontal-channel__title">React Mastery</p>
								</div>
								<div className="horizontal-subscription__info">
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

export default HorizontalVideoPreview;
