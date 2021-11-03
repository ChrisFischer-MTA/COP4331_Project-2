//import '../styles/App.css';
import React from 'react';
import './App.css';
import LoginPage from './LoginPage.js';
import NavBar from './NavBar.js';
import RegPage from './RegPage.js';
import Table from './Table.js';

function App() {
  return (
    <div className="App">
	  <LoginPage/>
	  <NavBar loggedIn={true}/>
	  <Table/>
    </div>
  );
}

export default App;
