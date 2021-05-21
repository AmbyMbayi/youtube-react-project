import React from 'react';

function CommentsHeader(props) {
	return (
		<div>
			<h2>{props.amountComents} Comments</h2>
			<button>
				<i class="bx bx-poll">Sort By</i>
			</button>
		</div>
	);
}

export default CommentsHeader;
