import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Status from './routes/Status';
import Service from './routes/Service';
import Team from './routes/Team';
import Thing from './routes/Thing';
import adminPage from './routes/adminPage';
import Home from './routes/Home';

import App from './App';
import NavBar from './NavBar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render (
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/status" element={<Status />} />
			<Route path="/service" element={<Service />} />
			<Route path="/team" element={<Team />} />
			<Route path="/thing" element={<Thing />} />
			<Route path="/adminPage" element={<adminPage />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
