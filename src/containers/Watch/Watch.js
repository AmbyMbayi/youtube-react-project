import React, { Component } from 'react';
import HorizontalVideoPreview from '../../components/HorizontalVideoPreview/HorizontalVideoPreview';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';

export class Watch extends Component {
	render() {
		return (
			<div>
				<Video id="-7fuHEEmEjs" />

				<VideoMetadata viewCount={100} />
				<VideoInfoBox />
				<div>Comments</div>
				<RelatedVideos />
			</div>
		);
	}
}

export default Watch;
