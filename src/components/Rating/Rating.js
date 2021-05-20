import './Rating.css';
import React from 'react';

function Rating(props) {
	return (
		<div>
			<i class="bx bxs-like">{props.likeCount}</i>
			<i class="bx bxs-dislike">{props.dislikeCount}</i>
		</div>
	);
}

export default Rating;
