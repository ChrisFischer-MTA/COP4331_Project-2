import React from 'react';

function Register() {
    const doReg = async event => {
        var regName = document.getElementById("regName").value;
        var regPassword = document.getElementById("regPassword").value;
        var confPassword = document.getElementById("confPassword").value;
        event.preventDefault();
        if (regPassword.length > 3 && regPassword === confPassword) {
            alert('User name is ' + regName + ' and password is ' + regPassword);
        }
        else {
            alert('The passwords must match and must be longer than 3 characters!');
        }
    };

    return (
        <div id="regDiv" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "90vh",
            color: "red"
        }}>
            <form onSubmit={doReg}>
                <span id="inner-title"><b>PLEASE REGISTER</b></span><br />
                <input type="text" id="regName" placeholder="Username" /><br />
                <input type="text" id="email" placeholder="example@email.com" /><br />
                <input type="text" id="TeamNum" placeholder="Team Number" /><br />
                <input type="password" id="regPassword" placeholder="Password" /><br />
                <input type="password" id="confPassword" placeholder="Confirm Password" /><br />
                <input type="submit" id="regButton" class="buttons" value="Register"
                    onClick={doReg} />
                <input type="submit" id="loginButton" class="buttons" value=" Return to Login"
                    onClick={doReg} />
            </form>
            <span id="regResult"></span>
        </div>
    );
};

export default Register;