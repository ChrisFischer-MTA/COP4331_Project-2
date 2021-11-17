import React from 'react';
import '../styles/admin.css'
//import {confirmAlert} from 'react-confirm-alert';
import NavBar from '../NavBar';
import useState from 'react';
import { thisExpression } from '@babel/types';

export default class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            teamNumber: 0,
            servNumber: 0,
            arr: [],
            show:false,
            compete: true
        };
    };
    render() {
        const blankSlate = async event =>
        {
            // API call
            // Indicate current competition is to be wiped  
        };
        return(
        <div>
            <span id = 'inner-title'>Admin Page</span><br/>
            {this.state.compete?
            <div>
            <input type="number" id="teamNum" placeholder="Number of teams" />
            <input type="number" id="servNum" placeholder="Number of services" /><br/>
            <button id = "newCom" onClick={() => {
                if(document.getElementById("teamNum").value > 0 & document.getElementById("servNum").value > 0)
                {
                    this.setState({
                        teamNumber: document.getElementById("teamNum").value,
                        servNumber: document.getElementById("servNum").value,
                        arr: new Array(this.state.servNumber),
                        show:true
                    });
                        document.getElementById("newCom").style.display = "none";
                        document.getElementById("servNum").style.display = "none";
                        document.getElementById("teamNum").style.display = "none";
                }
                else{
                    alert("Input fields must have a positive integer")
                }
            }}>New Competition
            </button>
            {this.state.show? <div><input id = "service" placeholder = "Service"/></div> : null} 
        </div>
        :
        <div>
            <input type="submit" id="BlankSlateButton" value="Delete Competition"
                    onClick={() => { 
                        if (window.confirm('Are you sure you wish to delete this competition?')) 
                        this.onCancel() } }/>
        </div>}
        </div>
        );
    }
};