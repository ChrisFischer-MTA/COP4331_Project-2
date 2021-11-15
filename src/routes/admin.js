import React from 'react';
import '../styles/admin.css'
//import {confirmAlert} from 'react-confirm-alert';
import NavBar from '../NavBar';
import useState from 'react';

export default class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            teamNumber: 0,
            servNumber: 0
        };
    };
    render() {
        return(
        <div>
            <span id = 'inner-title'>Admin Page</span><br/>
            <input type="number" id="teamNum" placeholder="Number of teams" /><br />
            <input type="number" id="servNum" placeholder="Number of services" /><br />
            <button id = "newCom" onClick={() => {
                this.setState({
                    teamNumber: document.getElementById("teamNum").value,
                    servNumber: document.getElementById("servNum").value
                });
                document.getElementById("newCom").style.display = "none";
                document.getElementById("servNum").style.display = "none";
                document.getElementById("teamNum").style.display = "none";
            }}>
                    New Competition</button>



        </div>

        );
    }
};
