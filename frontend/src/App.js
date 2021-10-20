//import '../styles/App.css';
import React from 'react';
import './App.css';
import LoginPage from './LoginPage.js';
import NavBar from './NavBar.js';
import RegPage from './RegPage.js';

function App() {
  return (
    <div className="App">
	  <LoginPage/>
	  <NavBar/>
    </div>
  );
}

export default App;
