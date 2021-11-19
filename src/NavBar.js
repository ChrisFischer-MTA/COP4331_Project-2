import React from 'react';
import './styles/styles.css';

class NavBar extends React.Component {
	out_string = <i className="fas fa-sign-out-alt"> Logout</i>;
	in_string = <i className="fas fa-sign-in-alt"> Login</i>;

	constructor(props) {
		super(props);
		this.loggedIn = props.loggedIn;
		this.state = {
			curTime: new Date().toLocaleString()
		}
		//this.state.curTime = new Date().toLocaleString();
	}

	updateTime() {
    	this.setState({
       		curTime: new Date().toLocaleString()
		});

	}

	componentDidMount() {
    	setInterval(() => {this.updateTime()}, 1000);
  	}	

	render() {
		return (
			<div className="navbar">
				<div className="dropdown">
					<button id="view-button" className="navItem">Views</button>
					<div className="dropdown-content">
						<a href="/status"><i className="fas fa-glasses"></i> Status View</a>
						<a href="/service"><i className="fas fa-glasses"></i> Service View</a>
						<a href="/team"><i className="fas fa-glasses"></i> Team View</a>
					</div>
				</div>
				<a className="navItem" href="/">Home</a>
				<p className="navItem" id="time">{this.state.curTime}</p>
				<a className="navItem" href="/login" >{this.loggedIn ? this.out_string: this.in_string}</a>
			</div>
		);
	}
}

export default NavBar;
