import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/styles.css';
import {useUser} from '../User';

const online = <img src="https://i.imgur.com/vMqbblf.png" alt="online"></img>;
const offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="offline"></img>;

const getPortName = (x) => {
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


const getArrow = (bool) => {
    return bool ? this.online : this.offline;
}

export default function Service() {
    const {user} = useUser();
    const [object, setObject] = useState({services:[], time: ""});

	useEffect(() => {
        statusCheck();
		setInterval(() => {statusCheck()}, 5000);
	}, []);

    const statusCheck = () => {
        console.log("Doing a status check");
        axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
            {
                sid: user.sid 
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

                    setObject({
                        services: services,
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

    return (
        <div className="page">
        <h1>Service Uptime</h1>
        <table>
            <thead>
                <tr>
                    <th>{user.name}</th>
                    <th>{object.time}</th>
                </tr>
            </thead>
            <tbody>
                {object.services.map((element, index) => {
                    let total = element.upCount + element.downCount;
                    let percent = (100 * (element.upCount / total)).toFixed(2);
                    return (
                        <tr>
                            <td>{`${element.name}:${getPortName(element.port)}`}</td>
                            <td>{`${percent}%`}</td>
                        </tr>
                    ) 
                })}
            </tbody>
        </table>
        </div>
	);
}
