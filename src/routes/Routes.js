import React from 'react';
import { useHistory } from 'react-router-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export const AuthenticationRoutes = () => {
    return(
        <BrowserRouter>
        </BrowserRouter>
    )

}

export const UnauthenicatedRoutes = () => {
    return (
<Routes>
    <Route path="/" element={<Home}/>} />
    <Route path="/status" element={<Status/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/recent" element={<Recent />} />
    <Route path="/addmachines" element={<AddMachines/>} />

    <Route path="/adminstatus" element={<A_STATUS sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
    <Route path="/adminservice" element={<A_SERVICE sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
    <Route path="/adminrecent" element={<A_RECENT sid={this.state.sid} isAdmin={this.state.isAdmin} />} />
    <Route path="/team" element={<Team sid={this.state.sid} />} />
    <Route path="/reset" element={<Reset />} />
    <Route path='*' element={<NotFound/>} />

</Routes>
    )}

