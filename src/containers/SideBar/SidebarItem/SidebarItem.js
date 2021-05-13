import React from 'react';
import './SidebarItem.css';

function SidebarItem(props) {
	return (
		<div className="sidebar__item">
			<i className={props.style} />
			<label>{props.label}</label>
		</div>
	);
}

export default SidebarItem;
