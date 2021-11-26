import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class Status extends React.Component {
    online = <img src="https://i.imgur.com/vMqbblf.png" alt="big black cock"></img>;
    offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="big black cock"></img>;

	constructor(props) {
		super(props);
		this.state = {
			sid: props.sid,
            userType: props.userType,
            teamName: "",
            services: [],
            time: ""
        }
	}

    statusCheck() {
        console.log("Doing a status check");
        axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
            {
                sid: this.state.sid
            }
        ).then(response => {
                console.log("Success");
                if (response.data.error === "") {
                    console.log(response.data);
                    let services = [];
                    let data = response.data.teams[0];

                    data.machines.forEach((element) => {
                        element.services.forEach((item) => {
                            services.push({
                                name: item.name, 
                                port: item.port, 
                                history: item.history
                            });
                        })
                    });

                    this.setState({
                        services: services,
                        teamName: data.name,
                        time: services[0].history[0].timestamp
                    })
                }

                else {
                    console.log("But not actually a success");
                    console.log(response);
                }
        }).catch(err => {
                console.log("Error\n" + err);
        });

    }

    getPortName(x) {
        // http, https, ssh, dns
        switch(x) {
            case 80:
                return "HTTP";
            case 443:
                return "HTTPS";
            case 22:
                return "SSH";
            case 53:
                return "DNS";
            case 110:
                return "POP";
            case 25:
                return "SMTP";
            case 21:
                return "FTP";  
            default:
                return "MISC";
        }
    }

	getArrow(bool) {
		return bool ? this.online : this.offline;
	}

	componentDidMount() {
        this.statusCheck();
		setInterval(() => {this.statusCheck()}, 300000);
	}

	render() {
		return (
			<div className="page">
			<h1>Status</h1>
			<table>
                <tbody>
                    <tr>
                        <th>{this.state.teamName}</th>
                        <th>{this.state.time}</th>
                    </tr>
                    {this.state.services.map((element, index) => {
                        return (
                            <tr>
                                <td>{`${element.name}:${this.getPortName(element.port)}`}</td>
                                <td>{this.getArrow(element.history[0].status)}</td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
            </div>
		);
	}
}
