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
	  <NavBar loggedIn={true}/>
	  <Table/>
    </div>
  );
}

/*
const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]


function App() {
    return (
        <div className="App">
            <table>
                <tr>
                    <th></th>
                    <th>Service 1</th>
                    <th>Service 2</th>
                </tr>
                <tr>
                    <td>Team 1</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Team 2</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Team 3</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

*/
export default App;
