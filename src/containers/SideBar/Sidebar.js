import React, { Component } from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';

export class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<SidebarItem label="Home" style="bx bxs-home" />
				<SidebarItem label="Trending" style="bx bxs-flame" />
				<SidebarItem label="Followers" style="bx bx-tv" />

				<SidebarItem label="History" style="bx bx-history" />
				<SidebarItem label="Watch Later" style="bx bxs-time-five" />
				<SidebarItem label="Like Videos" style="bx bxs-videos" />

				<SidebarItem label="Movies and Shows" style="bx bx-movie" />
				<SidebarItem label="Report History" style="bx bxs-flag-alt" />
				<SidebarItem label="Help" style="bx bxs-help-circle" />
				<SidebarItem label="Send Feedback" style="bx bxs-chat" />
			</div>
		);
	}
}

export default Sidebar;
