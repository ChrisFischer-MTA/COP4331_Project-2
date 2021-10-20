import React from 'react';
import './styles/styles.css';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.id = 1;
	}

	render() {
		return (
			<div className="navbar">
				<a><i className="icon-comment icon-align-left"></i>Status View</a>
				<a>Login/Logut</a>
			</div>
		)
	}
}

export default NavBar;
