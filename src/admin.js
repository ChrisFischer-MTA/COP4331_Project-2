import React from 'react';

function admin() {

    const newService = async event => {
        event.preventDefault();
    };
    
    const newTeam = async event => {
        
        event.preventDefault();
    };

    return (
        <div id="regDiv" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "90vh",
            color: "red"
        }}>
            <form onSubmit={newTeam}>
                <input type="submit" id="regButton" class="buttons" value="Create New Team"
                    onClick={newTeam} />
            </form>
            <form onSubmit={newService}>
                <input type="password" id="confPassword" placeholder="New Service" /><br />
                <input type="submit" id="loginButton" class="buttons" value=" Register New Service Test"
                    onClick={newService} />
            </form>
            <span id="regResult"></span>
        </div>
    );
};

export default admin;