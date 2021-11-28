import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

/* TEAM */
import Status from './routes/Status';
import Service from './routes/Service';
import Recent from './routes/Recent';
import AddMachines from './routes/AddMachines';

/* ADMIN */
import A_STATUS from './routes/A_Status';
import A_SERVICE from './routes/A_Service';
import A_RECENT from './routes/A_Recent';
import Team from './routes/Team';
import Reset from './routes/Reset'

import Home from './routes/Home';
import Registration from './routes/Registration';
import NotFound from './routes/NotFound';
import NavBar from './NavBar';
import Login from './routes/Login';
//import reportWebVitals from './reportWebVitals';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			loggedIn: true,
			sid: "619e6bf60be11351a40a67ed",
            userType: false
		}

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
	}
	
	handleSuccessfulAuth(sid, userType) {
		this.setState({
			loggedIn: true,
			sid: sid,
            userType: userType
		});

		console.log("Sucessfully logged in");	
	}

	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<NavBar loggedIn={this.state.loggedIn} userType={this.state.userType}/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/status" element={<Status sid={this.state.sid} userType={this.state.userType} />} />
						<Route path="/service" element={<Service sid={this.state.sid} userType={this.state.userType} />} />
						<Route path="/recent" element={<Recent sid={this.state.sid} userType={this.state.userType} />} />
						<Route path="/addmachines" element={<AddMachines sid={this.state.sid} userType={this.state.userType} />} />

						<Route path="/adminstatus" element={<A_STATUS sid={this.state.sid} userType={this.state.userType} />} />
						<Route path="/adminservice" element={<A_SERVICE sid={this.state.sid} userType={this.state.userType} />} />
						<Route path="/adminrecent" element={<A_RECENT sid={this.state.sid} userType={this.state.userType} />} />
						<Route path="/team" element={<Team sid={this.state.sid} />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/reset" element={<Reset />} />
						<Route path="/login" element={<Login loggedIn={this.state.loggedIn} />} />
						<Route path='*' element={<NotFound/>} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}

