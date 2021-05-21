import React, { Component } from 'react';
import HorizontalVideoPreview from '../../components/HorizontalVideoPreview/HorizontalVideoPreview';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import Comments from '../Comments/Comments';
import HeaderNav from '../HeaderNav/HeaderNav';

import './Watch.css';

export class Watch extends Component {
	render() {
		return (
			<div>
				<HeaderNav />
				<div className="watch__container">
					<div className="watch__video">
						<Video id="EByLQoUwOl8" />
						<VideoMetadata viewCount={3110415257} />
					</div>
					<VideoInfoBox />
					<Comments />
					<RelatedVideos />
				</div>
			</div>
		);
	}
}

export default Watch;
