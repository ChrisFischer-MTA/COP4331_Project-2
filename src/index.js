import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Status from './routes/Status';
import App from './App';
import NavBar from './NavBar';
import reportWebVitals from './reportWebVitals';
import RegPage from './routes/RegPage';
import Home from './routes/Home';

ReactDOM.render(
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/status" element={<Status />} />
			<Route path="/register" element={<RegPage />} />
			<Route path="/expenses" element={<Expenses />} />
			<Route path="/invoices" element={<Invoices />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
