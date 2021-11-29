import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useUser} from './User';
import { useNavigate} from "react-router-dom";

import './styles/styles.css';

export default function NavBar() {
    const {user} = useUser();
    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        setInterval(() =>{setTime(new Date().toLocaleString())}, 1000);
    });

    return (
        <div id={user.loggedIn ? "loggedIn" : "loggedOut"}>
        <div className="navbar">
            <div className="dropdown">
                { user.loggedIn ? <button id="view-button" className="navItem"><i className="fas fa-bars"></i></button> : ""}
                <div className="dropdown-content">
                    <Link to={user.isAdmin ? "/adminstatus" : "/status"}><i className="fas fa-glasses"></i> Status View</Link>
                    <Link to={user.isAdmin ? "/adminservice" : "/service"}><i className="fas fa-glasses"></i> Service View</Link>
                    <Link to={user.isAdmin ? "/adminrecent" : "/recent"}><i className="fas fa-glasses"></i> Recent View</Link>
                    {user.isAdmin ? <Link to="/team"><i className="fas fa-glasses"></i> Team View</Link> : ""}
                </div>
            </div>
            <a className="navItem" href="/"><i className="fas fa-home"></i> Home</a>
            <p className="navItem" id="time">{time}</p>
            {user.loggedIn ? <a className="navItem" href="/login" ><i className="fas fa-sign-in-alt"> Login</i></a> : <a className="navItem" href="/" ><i className="fas fa-sign-in-alt"> Logout</i></a>}
        </div>
        </div>
        
    )
}

/*
        <div id="navbar">
            {<div className="dropdown">
                <button id="view-button" className="navItem"><i class="fas fa-bars"></i></button>
                <div className="dropdown-content">
                    <a href="/adminstatus"><i className="fas fa-glasses"></i> Status View</a>
                    <a href="/adminservice"><i className="fas fa-glasses"></i> Service View</a>
                    <a href="/team"><i className="fas fa-glasses"></i> Team View</a>
                    <a href="/adminrecent"><i className="fas fa-glasses"/> Recent</a>
                </div>
            </div>
            }
			<p className="navItem" id="time">{time}</p>
            {}
        </div>

                    <Link {user.isAdmin ? to"\adminstatus" : to="/status"}><\Link>
class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			curTime: new Date().toLocaleString(),
			isAdmin: props.isAdmin,
			loggedIn: props.loggedIn
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
			<div>
				{ this.state.loggedIn?
					<div id = "loggedIn">
						{ this.state.isAdmin ?
							<div className="navbar">
								<div className="dropdown">
									<button id="view-button" className="navItem"><i class="fas fa-bars"></i></button>
									<div className="dropdown-content">
										<a href="/adminstatus"><i className="fas fa-glasses"></i> Status View</a>
										<a href="/adminservice"><i className="fas fa-glasses"></i> Service View</a>
										<a href="/team"><i className="fas fa-glasses"></i> Team View</a>
										<a href="/adminrecent"><i className="fas fa-glasses"/> Recent</a>
									</div>
								</div>
								<a className="navItem" href="/"><i class="fas fa-home"></i> Home</a>
								<p className="navItem" id="time">{this.state.curTime}</p>
								<a className="navItem" href="/login" >{this.loggedIn ? this.out_string: this.in_string}</a>
							</div>
							:
							<div className="navbar">
								<div className="dropdown">
									<button id="view-button" className="navItem"><i class="fas fa-bars"></i></button>
									<div className="dropdown-content">
										<a href="/status"><i className="fas fa-glasses"></i> Status View</a>
										<a href="/service"><i className="fas fa-glasses"></i> Service View</a>
										<a href="/recent"><i className="fas fa-glasses"/> Recent</a>
									</div>
								</div>
								<a className="navItem" href="/"><i class="fas fa-home"></i> Home</a>
								<p className="navItem" id="time">{this.state.curTime}</p>
								<a className="navItem" href="/login" ><i className="fas fa-sign-out-alt"> Logout</i></a>
							</div> 
						}
					</div>:
					<div id = "loggedOut">
					<div className="navbar">
						<div className="dropdown">
							<div className="dropdown-content">
								<a href="/adminstatus"><i className="fas fa-glasses"></i> Status View</a>
								<a href="/adminservice"><i className="fas fa-glasses"></i> Service View</a>
								<a href="/team"><i className="fas fa-glasses"></i> Team View</a>
								<a href="/adminrecent"><i className="fas fa-glasses"/> Recent</a>
							</div>
						</div>
						<a className="navItem" href="/"><i class="fas fa-home"></i> Home</a>
						<p className="navItem" id="time">{this.state.curTime}</p>
						<a className="navItem" href="/login" ><i className="fas fa-sign-in-alt"> Login</i></a>
					</div>
				</div>}
			</div>
		);
	}
}

export default NavBar;
*/
