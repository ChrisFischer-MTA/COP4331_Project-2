import React from 'react';
import './App.css';
import LoginPage from './LoginPage.js';
import NavBar from './NavBar.js';
import adminPage from './adminPage.js';
import Table from './Table.js';


export default function App() {
  return (
    <div className="App">
      <NavBar/>
	    <adminPage/>
    </div>
  );
}
