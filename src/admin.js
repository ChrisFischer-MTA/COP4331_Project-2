import React from 'react';

function admin()
{
    const doLogin = async event =>
    {
        var loginName = document.getElementById("loginName").value;
        var loginPassword = document.getElementById("loginPassword").value;
        event.preventDefault();
        alert('User name is ' +loginName +' and password is ' +loginPassword);
    };


    return (
        <div id="loginDiv" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "90vh",
            color: "red"
        }}>
            <form onSubmit={doLogin}>
                <span id="inner-title">PLEASE LOG IN</span><br />
                <input type="text" id="loginName" placeholder="Username" /><br />
                <input type="password" id="loginPassword" placeholder="Password" /><br />
                <input type="submit" id="loginButton" class="buttons" value="Login"
                    onClick={doLogin} />
                <input type="submit" id="regButton" class="buttons" value="Register"
                    onClick={doLogin} />
            </form>
            <span id="loginResult"></span>
        </div>
    );
};

export default admin;