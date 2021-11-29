import NavBar from './NavBar';
import React, {useState, useContext, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Status from './routes/Status';
import Home from './routes/Home';

import Service from './routes/Service';
import Recent from './routes/Recent';
import AddMachines from './routes/AddMachines';

import A_STATUS from './routes/A_Status';
import A_SERVICE from './routes/A_Service';
import A_RECENT from './routes/A_Recent';
import Team from './routes/Team';
import Reset from './routes/Reset'

import NotFound from './routes/NotFound';

export default function App() {
    return (
        <div className="app">
                <BrowserRouter>
                <NavBar />
                    <Routes>
						<Route path="/" element={<Home />} />
						<Route path="/status" element={<Status />} />
						<Route path="/recent" element={<Recent />} />
						<Route path='*' element={<NotFound/>} />
                    </Routes>
                </BrowserRouter>
        </div>

    )

}

//import reportWebVitals from './reportWebVitals';

/*
						<Route path="/service" element={<Service />} />
						<Route path="/addmachines" element={<AddMachines />} />

						<Route path="/adminstatus" element={<A_STATUS />} />
						<Route path="/adminservice" element={<A_SERVICE />} />
						<Route path="/adminrecent" element={<A_RECENT />} />
						<Route path="/team" element={<Team />} />
						<Route path="/reset" element={<Reset />} />
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
						<Route path="/" element={<Home {...this.state} handleLogin={this.handleLogin}/>} />
						<Route path="/status" element={<Status sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/service" element={<Service sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/recent" element={<Recent sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/addmachines" element={<AddMachines sid={this.state.sid} isAdmin={this.state.isAdmin} />} />

						<Route path="/adminstatus" element={<A_STATUS sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/adminservice" element={<A_SERVICE sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/adminrecent" element={<A_RECENT sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
						<Route path="/team" element={<Team sid={this.state.sid} />} />
						<Route path="/reset" element={<Reset />} />
						<Route path='*' element={<NotFound/>} />

					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}

*/
