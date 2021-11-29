import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/styles.css';
import {useUser} from '../User';
import {useNavigate} from 'react-router-dom';

const online = <img src="https://i.imgur.com/vMqbblf.png" alt="online"></img>;
const offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="offline"></img>;

const getPortName = (x) => {
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

const getArrow = (bool) => {
	return bool ? online : offline;
}

export default function Status() {
    const {user} = useUser();
    let navigate = useNavigate();
    const [object, setObject] = useState({services: [], time:"" });
    console.log(user);

    const statusCheck = () => {
        console.log("Doing a status check");
        console.log(user.sid);
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
                                history: item.history
                            });
                        })
                    });

                        setObject({
                            services: services,
                            time: ""
                        })
                    /*
                    if (services[0].history.length === 0) {
                        console.log("History was empty");
                        setObject({
                            services: services,
                            time: ""
                        })
                    }

                    else {
                        setObject({
                            services: services,
                            time: services[0].history[0].timestamp
                        })

                    }
                    */
                }

                else {
                    console.log("But not actually a success");
                    console.log(response);
                }
        }).catch(err => {
                console.log("Error\n" + err);
        });

    }

        if (user.isAdmin) navigate('/adminstatus')
    useEffect(() => {
        statusCheck();
        setInterval(() => {statusCheck()}, 5000);
    }, []);

    return (
        <div className="page">
        <h1>Status</h1>
        <table>
            <thead>
                <tr>
                    <th>{user.name}</th>
                    <th>{object.time}</th>
                </tr>
            </thead>
            <tbody>
                {object.services.map((element, index) => {
                    return (
                        <tr>
                            <td>{`${element.name}:${getPortName(element.port)}`}</td>
                            <td>{getArrow(element.history[0].status)}</td>
                        </tr>
                    ) 
                })}
            </tbody>
        </table>
        </div>
    );
}
