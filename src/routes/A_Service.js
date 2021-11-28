import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class A_Service extends React.Component {
    online = <img src="https://i.imgur.com/vMqbblf.png" alt="green arrow"></img>;
    offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="red"></img>;

	constructor(props) {
		super(props);
		this.state = {
			sid: "69",
            userType: props.userType,
            teams: [],
            services: []
        }
	}

    statusCheck() {
        console.log("Doing a status check");
        axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
            {
                sid: this.state.sid
            }
        ).then(response => {
                if (response.data.error === "") {
                    console.log("Success");
                    console.log(response.data);
                    let teams = []
                    let services = []

                    response.data.teams[0].machines.forEach((machine)=> {
                        machine.services.forEach((service) => {
                            services.push(`${service.name}:${this.getPortName(service.port)}`)
                        });

                    });

                    console.log(services);
                    this.setState({services: services});
                    // team -> name, services

                    response.data.teams.forEach((team) => {
                        services = []
                        team.machines.forEach((item) => {
                            item.services.forEach((service) => {
                                services.push({
                                    upCount: service.upCount,
                                    downCount: service.downCount
                                })
                            })
                        });

                        teams.push({
                            teamName: team.name,
                            services: services
                        })

                    })

                    this.setState({
                        teams: teams,
                    });

                    console.log(teams)
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
			<h1>Service View</h1>
			<table>
                <thead>
                    <tr>
                        <th>Teams/Services</th>
                        {this.state.services.map((service) => {
                            return <th>{service}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.state.teams.map((team, index) => {
                        return(
                            <tr>
                                <td>{team.teamName}</td> 
                                {team.services.map((element) => {
                                    let total = element.upCount + element.downCount;
                                    let percent = (100 * (element.upCount / total)).toFixed(2);
                                    return <td>{`${percent}%`}</td>
                                })}
                            </tr>)
                        }
                    )}
                </tbody>
            </table>
            </div>
		);
	}
}
