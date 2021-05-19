import React from 'react';
import './NextUpVideo.css';
import HorizontalVideoPreview from '../../HorizontalVideoPreview/HorizontalVideoPreview';

function NextUpVideo() {
	return (
		<div className="check">
			<h4>Up next</h4>
			<label class="switch">
				<input type="checkbox" />
				<span class="slider round" />
			</label>
		</div>
	);
}

export default NextUpVideo;
