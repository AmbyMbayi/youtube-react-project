import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import './Subscription.css';
import Subscription from './Subscription/Subscription';

function Subscriptions() {
	return (
		<div>
			<SidebarHeader heading="subscriptions" />
			<Subscription label="React Channel" />
			<Subscription label="Redux Complete" />
			<Subscription label="Javascript Mastery" />
			<Subscription label="UI/UX Design" />
			<Subscription label="Python Mastery" />
		</div>
	);
}

export default Subscriptions;
