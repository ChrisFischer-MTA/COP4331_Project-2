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
import NotFound from './routes/NotFound';
import NavBar from './NavBar';
//import reportWebVitals from './reportWebVitals';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loggedIn: false,
			sid: "619e6bf60be11351a40a67ed",
            isAdmin: false
		}

		this.handleLogin = this.handleLogin.bind(this);
	}
	
    handleLogin(sid, userType) {
        this.setState({
            loggedIn: true,
            sid: sid,
            isAdmin: (userType === 'admin') ? true : false
        });
    }


	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<NavBar loggedIn={this.state.loggedIn} isAdmin={this.state.isAdmin}/>
					<Routes>
						<Route 
                            path="/" 
                            element={<Home handleLogin={this.handleLogin} {...props} sid={this.state.sid} isAdmin={this.state.isAdmin} />} />

						<Route path="/status" element={<Status sid={this.state.sid} {...props} isAdmin={this.state.isAdmin} />} />
						<Route path="/service" element={<Service sid={this.state.sid} {...props} isAdmin={this.state.isAdmin} />} />
						<Route path="/recent" element={<Recent sid={this.state.sid} {...props} isAdmin={this.state.isAdmin} />} />
						<Route path="/addmachines" element={<AddMachines {...props} sid={this.state.sid} isAdmin={this.state.isAdmin} />} />

						<Route path="/adminstatus" element={<A_STATUS {...props} sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/adminservice" element={<A_SERVICE {...props} sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/adminrecent" element={<A_RECENT {...props} sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/team" element={<Team {...props} sid={this.state.sid} />} />
						<Route path="/reset" element={<Reset {...props} />} />
						<Route path='*' element={<NotFound/>} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}

