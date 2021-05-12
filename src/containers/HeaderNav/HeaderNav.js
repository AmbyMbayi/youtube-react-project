import './HeaderNav.css';

import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';

export class HeaderNav extends Component {
	render() {
		return (
			<div>
				<img src={logo} alt="" />
				<form action="">
					<input type="text" placeholder="search" />
				</form>
			</div>
		);
	}
}

export default HeaderNav;
