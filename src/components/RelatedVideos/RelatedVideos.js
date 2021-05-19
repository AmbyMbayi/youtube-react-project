import React from 'react';
import HorizontalVideoPreview from '../HorizontalVideoPreview/HorizontalVideoPreview';
import NextUpVideo from './NextUpVideo/NextUpVideo';

function RelatedVideos() {
	return (
		<div>
			<NextUpVideo />
			<HorizontalVideoPreview />
			<HorizontalVideoPreview />
			<HorizontalVideoPreview />
		</div>
	);
}

export default RelatedVideos;
