import React, {Component, useState} from 'react';
import axios from 'axios'; // need to add to package json
import {useUser} from '../User';
import { useNavigate} from "react-router-dom";


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

export default function Login() {
    const {user, login} = useUser();
    const {value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const {value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    let navigate = useNavigate();

	const resetPass = (event) => {
		event.preventDefault();
		if(!(email === "")){
			axios.post("https://scoring-engine-api.herokuapp.com/api/resetPassword",{
				email: email
			})
			alert("Please check your email for the new password.");
		}
		else
		{
			alert("Must provide an email")
		}
	}
	const handleSubmit = (event) => {
        event.preventDefault();

		axios.post("https://scoring-engine-api.herokuapp.com/api/login", { 
			email: email, 
			password: password
		})
		.then(response => {
			console.log(response.data);
			if (response.data.error === "") {
                console.log(user);
                login(response.data.type, response.data.sid, email);
                console.log(user);
                if (user.isAdmin)
                    navigate('/adminstatus');
                else
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
						name="email" 
						placeholder="Email/Name" 
                        {...bindEmail}
						required
					/>
					<input type="password" 
						name="password" 
						placeholder="Password" 
                        {...bindPassword}
						required
					/>
					<button type="submit">Submit <i className="fas fa-sign-in-alt"></i></button>
					<button onClick={resetPass}>Forgot Password</button>
				</form>
			</div>

    )

}
