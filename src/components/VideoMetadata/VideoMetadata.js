import './VideoMetadata';

import React from 'react';
import Rating from '../Rating/Rating';

function VideoMetadata(props) {
	const viewCounts = Number(props.viewCount).toLocaleString() || '';
	return (
		<div>
			<h3>Metadata</h3>

			<span>{props.viewCount} 2 views</span>

			<Rating likeCount={10} dislikeCount={100} />
			<i class="bx bxs-share bx-flip-horizontal" />
			<i class="bx bx-dots-horizontal-rounded" />
			<i class="bx bxs-plus-circle" />
		</div>
	);
}

export default VideoMetadata;
