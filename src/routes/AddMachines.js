import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class AddMachines extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sid: props.sid
        }
	}

    statusCheck() {
        console.log("Doing a status check");
        axios.post('https://scoring-engine-api.herokuapp.com/api/getRequiredMachines',
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
        if(x === 80)
        {
            return "HTTP";
        }
        else if(x === 443)
        {
            return "HTTPS";
        }
        else if(x === 22)
        {
            return "SSH";
        }
        else if(x === 53)
        {
            return "DNS";
        }
            else if(x === 110)
        {
            return "POP";
        }
        else if(x === 25)
        {
            return "SMTP";
        }
        else if(x === 21)
        {
            return "FTP";
        }

        else
        {
            return "Service";
        }
    }

	getArrow(bool) {
		return bool ? this.online : this.offline;
	}

	componentDidMount() {
        this.statusCheck();
		setInterval(() => {this.statusCheck()}, 300000);
	}

    // 11 up
    //  37 down
	render() {
		return (
			<div className="page">
			<h1>Add Machines</h1>
            </div>
		);
	}
}
