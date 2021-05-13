import './HeaderNav.css';

import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';

export class HeaderNav extends Component {
	render() {
		return (
			<div className="navbar__header">
				<div className="image__logo">
					<img src={logo} alt="" />
					<h2>TealTube</h2>
				</div>

				<form action="" className="input__form">
					<div className="search__input">
						<input type="text" placeholder="search" />
					</div>
				</form>
				<div className="microphone">
					<i className="bx bxs-microphone " />
				</div>
				<div className="right__icons">
					<i className="bx bxs-camera-movie" />
					<i className="bx bxs-grid" />
					<i className="bx bxs-bell-ring" />
					<i className="bx bxs-user" />
				</div>
			</div>
		);
	}
}

export default HeaderNav;
