import React from 'react';
import './Subscription.css';

function Subscription(props) {
	return (
		<div>
			<div className="subscription__details">
				<img src="http://via.placeholder.com/28x28" alt="" />
				<label>{props.label}</label>
				<i class="bx bx-broadcast broadcast__icon" />
			</div>
		</div>
	);
}

export default Subscription;
