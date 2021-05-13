import React from 'react';
import './SidebarHeader.css';

function SidebarHeader(props) {
	return (
		<div>
			<p className="sidebar__header">{props.heading}</p>
		</div>
	);
}

export default SidebarHeader;
