import React, { Component } from 'react';
import AddComment from './AddComment/AddComment';
import Comment from './Comment/Comment';
import CommentsHeader from './CommentsHeader/CommentsHeader';

export class Comments extends Component {
	render() {
		return (
			<div>
				<CommentsHeader amountComments={this.props.amountComments} />
				<AddComment />
				<Comment />
			</div>
		);
	}
}

export default Comments;
