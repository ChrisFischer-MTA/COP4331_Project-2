import NavBar from './NavBar';
import React, {useState, useContext, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Status from './routes/Status';
import Home from './routes/Home';
import Login from './routes/Login';

import Service from './routes/Service';
import Recent from './routes/Recent';
import AddMachines from './routes/AddMachines';
import AddTeam from './routes/AddTeam'


import ADMIN_STATUS from './routes/A_Status';
import ADMIN_SERVICE from './routes/A_Service';
import ADMIN_RECENT from './routes/A_Recent';
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
						<Route path="/login" element={<Login />} />
						<Route path="/status" element={<Status />} />
						<Route path="/adminstatus" element={<ADMIN_STATUS />} />
						<Route path="/adminservice" element={<ADMIN_SERVICE />} />
						<Route path="/recent" element={<Recent />} />
						<Route path="/adminrecent" element={<ADMIN_RECENT />} />
						<Route path="/service" element={<Service />} />
			            <Route path="/addTeam" element={<AddTeam />} />
						<Route path="/team" element={<Team />} />
						<Route path='*' element={<NotFound/>} />
                    </Routes>
                </BrowserRouter>
        </div>
    )

}
