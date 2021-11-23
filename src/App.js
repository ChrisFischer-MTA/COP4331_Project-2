import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Status from './routes/Status';
import Service from './routes/Service';
import Team from './routes/Team';
import Home from './routes/Home';
import Admin from './routes/admin';
import Registration from './routes/Registration';
import NotFound from './routes/NotFound';

import NavBar from './NavBar';
import Login from './routes/Login';
import reportWebVitals from './reportWebVitals';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			loggedIn: false,
			sid: ""
		}

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
	}
	
	handleSuccessfulAuth(sessionId) {
		this.setState({
			loggedIn: true,
			sessionId: sessionId
		});

		console.log("Sucessfully logged in");	
	}

	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<NavBar loggedIn={this.state.loggedIn}/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route 
							exact
							path="/status" 
							element={<Status/>}
						/>
						<Route path="/service" element={<Service />} />
						<Route path="/team" element={<Team />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/login" element={<Login />} />
						<Route path="/admin" element={<Admin/>} />
						<Route path='*' element={<NotFound/>} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}

