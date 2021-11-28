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
                                upCount: item.upCount,
                                downCount: item.downCount,
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
		setInterval(() => {this.statusCheck()}, 120000);
	}

    // 11 up
    //  37 down
	render() {
		return (
			<div className="page">
			<h1>Service Uptime</h1>
			<table>
                <thead>
                    <tr>
                        <th>{this.state.teamName}</th>
                        <th>{this.state.time}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.services.map((element, index) => {
                        let total = element.upCount + element.downCount;
                        let percent = (100 * (element.upCount / total)).toFixed(2);
                        return (
                            <tr>
                                <td>{`${element.name}:${this.getPortName(element.port)}`}</td>
                                <td>{`${percent}%`}</td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
            </div>
		);
	}
}
