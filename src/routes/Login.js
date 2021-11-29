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
                navigate('/status');

			}
		})
		.catch(error => {
			console.log("Error:\n", error);
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
				</form>
			</div>

    )

}
/*
export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleSubmit(event) {
		event.preventDefault(); const {
			email,
			password
		} = this.state;

		axios.post("https://scoring-engine-api.herokuapp.com/api/login", { 
			email: email, 
			password: password
		})
		.then(response => {
			console.log(response.data);
			if (response.data.error === "") {
				this.props.handleSuccessfulAuth(response.data.sid, false);
				//this.props.sessionId = response.data.sessionId;

			}
		})
		.catch(error => {
			console.log("Error:\n", error);
		});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})

		event.preventDefault();
	}

	render() {
		return (
			<div>
				<br/>
				<h1>Login</h1>
				<form className="loginForm" onSubmit={this.handleSubmit}>
					<input type="text" 
						name="email" 
						placeholder="Email/Name" 
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<input type="password" 
						name="password" 
						placeholder="Password" 
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<button type="submit">Submit <i className="fas fa-sign-in-alt"></i></button>
				</form>
			</div>

		)
	}

}
*/
