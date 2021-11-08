import React from 'react';
import './App.css';
import LoginPage from './LoginPage.js';
import NavBar from './NavBar.js';
//import RegPage from './RegPage.js';
//import Table from './Table.js';
import adminPage from './adminPage.js'
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
	    <LoginPage/>
    </div>
  );
}
