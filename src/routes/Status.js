import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class Status extends React.Component {
	online = <i className="fas fa-solid fa-arrow-up online"></i>;
	offline = <i className="fas fa-solid fa-arrow-down offline"></i>;

	constructor(props) {
		super(props);
		this.state = {
			sessionId: props.sessionId,
            machines: [{
                name: "",
                ip: "",
                services: [{
                    name: "",
                    port: 0,
                    upCount: 0,
                    downCount: 0,
                    history: {
                        time: "",
                        status: null
                    }
                }]
            }]
		}

        console.log("Doing a status check");
        axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
            {
                serviceId: this.state.sessionId
            }
        ).then(response => {
                console.log("Success");
                if (response.error === "") {

                }

                else {
                    console.log("But not actually a success");
                }
        }).catch(err => {
                console.log("Error");
        });

	}
	
    statusCheck() {
    }

	getArrow(bool) {
		return bool ? this.online : this.offline;
	}

	statusCheck() {
		console.log("fux this shib");
	}

	componentDidMount() {
		setInterval(() => {this.statusCheck()}, 120000);
	}

	render() {
        this.statusCheck();
		return (
			<div className="page">
			<h1>Recent Checks</h1>
			<table>
			<tr>
				<th>Name</th>
			</tr>
            </table>
            </div>
		);
	}
}
