import './Rating.css';
import React from 'react';

function Rating(props) {
	return (
		<div className="rating__icons">
			<span>
				<i class="bx bxs-like like__icon" />
				<span>{props.likeCount}</span>
			</span>

			<span>
				<i class="bx bxs-dislike dislike__icon" />
				<span>{props.dislikeCount} </span>
			</span>
		</div>
	);
}

export default Rating;
