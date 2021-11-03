import React from 'react';
import './styles/styles.css';

class NavBar extends React.Component {
	out_string = <i className="fas fa-sign-out-alt"> Logout</i>;
	in_string = <i className="fas fa-sign-in-alt"> Login</i>;

	constructor(props) {
		super(props);
		this.loggedIn = props.loggedIn;
		this.curTime = new Date().toLocaleString();
    	setInterval(() => {
      	this.setState({
       	 curTime : new Date().toLocaleString(),
     	 })
   	 }, 1000)
	}

	componentDidMount() {
  	}	

	render() {
		return (
			<div className="navbar">
				<a><i className="fas fa-glasses"></i> Status View</a>
				<a>{this.curTime}</a>
				<a>{this.loggedIn ? this.out_string: this.in_string}</a>
			</div>
		);
	}
}

export default NavBar;
