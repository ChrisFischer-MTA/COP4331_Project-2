import React from 'react';
import axios from 'axios'; // need to add to package json
import '../styles/admin.css'

export default class Admin extends React.Component 
{
    constructor(props) {
		super(props);
		this.state = {
			teamName: "",
            password: "",
            confirmp: "",
             redirect: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

    handleSubmit(event) {
		event.preventDefault();
		const {
			teamName,
			password
		} = this.state;

		axios.post("https://", { // TODO: make the URL the real one
			teamName: teamName, 
			password: password
			
		},
		{ withCredentials: true })
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log("Error:\n", error);
		});

		this.setState({
			verify : true
		});
	}

    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})

		event.preventDefault();
	}

    render()
    {
        return(
            <div>
            {this.state.redirect?
            <div className="page"><br/><p>Redirecting...</p></div>:
            <div className="page">
                <form>
                    <h1>Password Reset</h1>
                    <input 
                        type="text" 
                        placeholder = "Team Name" 
                        value={this.state.veriCode} 
                        required
                    /><br/>
                    <input type="password" 
                        name="password" 
                        placeholder="New Password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    /><br/>
                    <input type="password_confirmation" 
                        name="password_confirmation" 
                        placeholder="Password confirmation" 
                        value={this.state.confirmp}
                        onChange={this.handleChange}
                        required
                    /><br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>}
            </div>
        );
    }
}
