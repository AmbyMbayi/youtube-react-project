import React from 'react';
import Rating from '../../../components/Rating/Rating';

function Comment(props) {
	return (
		<div>
			<img src="http://via.placeholder.com/48x48" alt="" />
			<div>
				<h2>user name</h2>
				<span>Commetmt</span>
				<div>
					<Rating likeCount={1} />
					<button type="submit">Reply</button>
				</div>
			</div>
		</div>
	);
}

export default Comment;
