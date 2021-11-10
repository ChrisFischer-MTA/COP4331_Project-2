import React from 'react';

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
        };

        return(
        <div>
            <form>
                <span id = 'inner-title'>Admin Page</span><br/>
                <input type="NumTeams" id="loginPassword" placeholder="Number of teams" /><br />
                <input type="submit" id="TeamButton" class="buttons" value="Make Teams"
                    onClick={newTeam} /><br/><br/>
                <input type="ServiceName" id="loginPassword" placeholder="Service Name" /><br />
                <input type="submit" id="ServiceButton" class="buttons" value="Make Service"
                    onClick={newService} /><br/><br/>
                <input type="submit" id="BlankSlateButton" class="buttons" value="New Competition"
                    onClick={blankSlate} />
            </form>
        </div>
        );
    }
};
