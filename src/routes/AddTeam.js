import React, {Component, useState} from 'react';
import axios from 'axios'; // need to add to package json
import {useUser} from '../User';
import { useNavigate} from "react-router-dom";
// import { useUser } from '../User';

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    }
}

export default function AddTeam() {
    //const {user, login} = useUser();
    const {user } = useUser();
    // requrires name password email
    const {value:name, bind:bindName, reset:resetName } = useInput('');
    const {value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    const {value:joinCode, bind:bindjoinCode, reset:resetJoin } = useInput('');
    let navigate = useNavigate();

	const handleSubmit = (event) => {
        event.preventDefault();

		axios.post("https://scoring-engine-api.herokuapp.com/api/addTeam", { 
			name: name, 
			password: password,
            joinCode : joinCode
            //sid : user.sid
		})
		.then(response => {
			console.log(response.data);
			if (response.data.error === "") {
                //console.log(user);
                //login(response.data.type, response.data.sid, email);
                //console.log(user);
                navigate('/status');

			}
		})
		.catch(error => {
			console.log("Error:\n", error);
			alert("An invalid email or password has been provided. Please try again.");
		});
	}

    return (
			<div>
				<br/>
				<h1>Login</h1>
				<form className="loginForm" onSubmit={handleSubmit}>
					<input type="text" 
						name="name" 
						placeholder="Team Name" 
                        {...bindName}
						required
					/>
					<input type="password" 
						name="password" 
						placeholder="Password" 
                        {...bindPassword}
						required
					/>
                    <input type="text" 
						name="joinCode" 
						placeholder="joinCode" 
                        {...bindjoinCode}
						required
					/>
					<button type="submit">Submit <i className="fas fa-sign-in-alt"></i></button>
				</form>
			</div>

    )

}
