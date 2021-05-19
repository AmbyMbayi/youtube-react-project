import './Video';

import React from 'react';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
function Video(props) {
	if (!props.id) {
		return null;
	}
	const embedurl = `${BASE_EMBED_URL}${props.id}`;
	//const embedurl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;
	return (
		<iframe
			src={embedurl}
			width={'560'}
			height={'315'}
			frameBorder="0"
			allow="autoplay; encrypted-media"
			allowFullScreen
			title={'video'}
		/>
	);
}

export default Video;
