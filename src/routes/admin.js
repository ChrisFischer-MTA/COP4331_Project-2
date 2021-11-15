import React from 'react';
//import {confirmAlert} from 'react-confirm-alert';
import NavBar from '../NavBar';

export default class Admin extends React.Component {
    render() {
        

        const newTeam = async event =>
        {
            // API call
            // Update database with new number of teams
            // Assign each team a password
        };

        const newService = async event =>
        {
            // API call
            // Update database with new service (Name-Protocol)
        };

        const blankSlate = async event =>
        {
            // API call
            // Update database with new service (Name-Protocol)
            // Will need a prompt to ask admin if he's sure about wiping the competition
            
        };

        const removeField = async event =>
        {
            document.getElementById("teamNum").style.visibility = "hidden"
            document.getElementById("ServNum").style.visibility = "hidden"
            //document.getElementById("newCompete").style.display = 'none';
            event.preventDefault();
        };

        return(
        <div>
            <br/><br/><br/>
            
            <form>
                <span id = 'inner-title'>Admin Page</span><br/>
                <input type="number" id="teamNum" placeholder="Number of teams" /><br />
                <input type="number" id="servNum" placeholder="Service Name" /><br />
                <input type="submit" id="newCompete" class="buttons" value="New Competition"
                    onClick={() => {
                        document.getElementById("teamNum").style.visibility = "hidden"
                    }}/>
                <input type="submit" id="BlankSlateButton" class="buttons" value="New Competition"
                    onClick={() => { 
                        if (window.confirm('Are you sure you wish to delete this competition?')) 
                        this.onCancel() } }/>
            </form>
        </div>
        );
    }
};
