import React, { Component } from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';

export class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<SidebarItem label="Home" style="bx bxs-home" />
				<SidebarItem label="Explore" style="bx bxs-compass" />
				<SidebarItem label="Subscriptions" style="bx bx-tv" />
				<SidebarItem label="Library" style="bx bxs-videos" />
				<SidebarItem label="History" style="bx bx-history" />
				<SidebarItem label="Watch Later" style="bx bxs-time-five" />
			</div>
		);
	}
}

export default Sidebar;
