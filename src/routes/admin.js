import React from 'react';
import axios from 'axios';
import '../styles/styles.css';


function Admin(){

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