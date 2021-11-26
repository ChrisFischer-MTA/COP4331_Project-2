import React, {Component} from 'react';
import axios from 'axios'; // need to add to package json

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
		event.preventDefault();
		const {
			email,
			password
		} = this.state;

		axios.post("https://scoring-engine-api.herokuapp.com/api/login", { // TODO: make the URL the real one
			email: email, 
			password: password
		},
		{ withCredentials: true })
		.then(response => {
			console.log(response.data);
			if (response.data.error === "") {
				this.props.handleSuccessfulAuth(response.data.sessionId, 0); // TODO: change zero to actual userType code
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
				<form onSubmit={this.handleSubmit}>
					<input type="text" 
						name="email" 
						placeholder="Email" 
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
					<button type="submit">Submit</button>
				</form>
			</div>

		)
	}

}
