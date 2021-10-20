//import '../styles/App.css';
import React from 'react';
import './App.css';
import LoginPage from './LoginPage.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App">
	  <LoginPage/>
	  <NavBar/>
    </div>
  );
}

export default App;
