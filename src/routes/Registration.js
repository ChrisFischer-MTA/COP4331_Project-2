import React, {Component} from 'react';
import axios from 'axios'; // need to add to package json

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			password_confirmation: "",
			registration_errors: "",
			verify: false,
			veriCode: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		const {
			email,
			password
		} = this.state;

		axios.post("https://scoring-engine-api.herokuapp.com/api/register", { 
			email: email, 
			password: password
		})
		.then(response => {
            console.log("Sucess:");
            console.log(response.data);
            this.setState({
                verify: true
            })
		})
		.catch(error => {
			console.log("Error:\n", error);
		});

	}

	handleSubmit2(event) {
		event.preventDefault();
		const {
			veriCode,
            email
		} = this.state;

		axios.post("https://scoring-engine-api.herokuapp.com/api/verifyEmail", {
			email: email,
            code: veriCode
		})
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log("Error:\n", error);
		});
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		})

	}

	render() {
		return (
			<div>
				{this.state.verify?
				<div className="page"><br/>
					<form onSubmit={this.handleSubmit2} className="loginForm">
						<p>A verification code has been sent to your email.</p>
						<p>Please enter the verification code here:</p>
						<input type="text" name="veriCode" onChange={this.handleChange} placeholder = "verify code" value={this.state.veriCode} required/>
					<input type="email" 
						name="email" 
						placeholder="Email" 
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
						<button type="submit">Submit</button>
					</form>
				</div>:
				<div className="page">
				<h1>Register</h1>
				<form className="loginForm" onSubmit={this.handleSubmit}>
					<input type="email" 
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
					<input type="password_confirmation" 
						name="password_confirmation" 
						placeholder="Password confirmation" 
						value={this.state.password_confirmation}
						onChange={this.handleChange}
						required
					/>
					<button type="submit">Submit <i className="fas fa-sign-in-alt"></i></button>
				</form>
				</div>}
			</div>

		)
	}

}
