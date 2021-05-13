import React, { Component } from 'react';
import './Sidebar.css';
import SidebarFooter from './SidebarFooter/SidebarFooter';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarItem from './SidebarItem/SidebarItem';
import Subscriptions from './Subscriptions/Subscriptions';

export class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<SidebarItem label="Home" styling="bx bxs-home" />
				<SidebarItem label="Trending" styling="bx bxs-flame" />
				<SidebarItem label="Followers" styling="bx bx-tv" />
				<div className="divider" />
				<SidebarHeader heading="Library" />
				<SidebarItem label="History" styling="bx bx-history" />
				<SidebarItem label="Watch Later" styling="bx bxs-time-five" />
				<SidebarItem label="Like Videos" styling="bx bxs-like" />
				<div className="divider" />
				<Subscriptions />
				<div className="divider" />
				<SidebarHeader heading="More from TealTube" />
				<SidebarItem label="Movies and Shows" styling="bx bx-movie" />
				<div className="divider" />
				<SidebarItem label="Report History" styling="bx bxs-flag-alt" />
				<SidebarItem label="Help" styling="bx bxs-help-circle" />
				<SidebarItem label="Send Feedback" styling="bx bxs-chat" />
				<div className="divider" />
				<SidebarFooter />
			</div>
		);
	}
}

export default Sidebar;
