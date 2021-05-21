import './VideoMetadata.css';

import React from 'react';
import Rating from '../Rating/Rating';

function VideoMetadata(props) {
	const viewCounts = Number(props.viewCount).toLocaleString() || '';
	return (
		<div>
			<h3 className="videoclip__name">The Script - Superheroes (Official Video)</h3>

			<span className="views__information">{props.viewCount} views • Premiered Jan 24, 2019 </span>
			<div />
			<div className="videoIcons">
				<Rating likeCount={10} dislikeCount={100} />

				<div className="video__info_icons">
					<i class="bx bxs-share bx-flip-horizontal share__icon" />
					<i class="bx bx-dots-horizontal-rounded" />
					<i class="bx bxs-plus-circle" />
				</div>
			</div>
		</div>
	);
}

export default VideoMetadata;
