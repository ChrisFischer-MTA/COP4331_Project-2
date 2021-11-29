import React from 'react';
import axios from 'axios';
import '../styles/styles.css';


function addCompetition(){
    const {user} = useUser();
    const {value:name, bind:bindName, reset:resetName } = useInput('');
    const {value:maxTeams, bind:bindMaxTeams, reset:resetMaxTeams } = useInput('');
    const {value:startTime, bind:bindStartTime, reset:resetStartTime } = useInput('');
    const {value:endTime, bind:bindEndTime, reset:resetEndTime } = useInput('');
    const {value:machines, bind:bindMachine, reset:resetMachine } = useInput('');
    const callAddCompetition() {
        axios.post('https://scoring-engine-api.herokuapp.com/api/addCompetition', {
            
        }).then((response) => {
            console.log("Success" + response.data);
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
    }

    return (
        <div className="page">
            <h1>Admin</h1>
            <form className="Form" onSubmit={callAddCompetition}>
                <button type="submit">Add Dragonfly</button>
            </form>
        </div>

    )

}
export default Admin;