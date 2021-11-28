import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class Status extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sid: "69",
            teams: []
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

	componentDidMount() {
        this.statusCheck();
		setInterval(() => {this.statusCheck()}, 120000);
	}

	render() {
		return (
			<div className="page">
			<h1>Team Status</h1>
			<table>
                <thead>
                        <th>Team Name</th>
                        <th>Services Up</th>
                        <th>Services Down</th>
                </thead>
                <tbody>
                    {this.state.teams.map((element) => {
                        return (<tr>
                                    <td>{element.teamName}</td>
                                    <td>{element.upCount}</td>
                                    <td>{element.downCount}</td>
                                
                                </tr>)
                    })}
                </tbody>
            </table>
            </div>
		);
	}
}
