import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class Status extends React.Component {
    online = <img src="https://i.imgur.com/vMqbblf.png" alt="green arrow"></img>;
    offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="red"></img>;

	constructor(props) {
		super(props);
		this.state = {
			sid: "69",
            userType: props.userType,
            teams: null
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

                    response.data.teams.forEach((team) => {
                        let upCount = 0;
                        let downCount = 0;

                        team.machines.forEach((item) => {
                            item.services.forEach((service) => {
                                if (service.status) // TODO: change this to fit the fixed structure
                                    upCount++;
                                
                                else 
                                    downCount++;
                            })
                        });

                        teams.push({
                            teamName: team.name,
                            upCount: upCount,
                            downCount: downCount 
                        })
                    })

                    this.setState({
                        teams: teams
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
			<h1>Status</h1>
			<table>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            </div>
		);
	}
}
