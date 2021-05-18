import React from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';
import './VideoGrid.css';

function VideoGrid(props) {
	return (
		<div className="grid__section">
			<p className="grid__title">{props.title}</p>
			<div className="video__grid">
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
			</div>
			<div className="grid__divider" />
		</div>
	);
}

export default VideoGrid;
