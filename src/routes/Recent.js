import React, {useState, useEffect} from 'react';
import {useUser} from '../User';
import axios from 'axios';
import '../styles/styles.css';

const online = <img src="https://i.imgur.com/vMqbblf.png" alt="green arrow"></img>;
const offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="red arrow"></img>;

const getArrow = (bool) => {
	return bool ? online : offline;
}

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

export default function Recent() {
    console.log("am i even getting here");
    const {user} = useUser();
    console.log(user.sid);
    const [object, setObject] = useState({services: [], time:[] });

    const statusCheck = () => {
        console.log("Doing a status check");
        axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
        {
          sid: user.sid
        }).then(response => {
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
              time: [services[0].history[0].timestamp,
                services[0].history[1].timestamp,
                services[0].history[2].timestamp,
                services[0].history[3].timestamp,
                services[0].history[4].timestamp]
            });
          }

          else {
            console.log("But not actually a success");
            console.log(response);
          }
          }).catch(err => {
              console.log("Error\n" + err);
              console.log(user.sid);
          });
    }



	useEffect(() => {
        statusCheck();
		setInterval(() => {statusCheck()}, 5000);
	},[]);

    return (
      <div className="page">
        {console.log(user.sid)}
        <h1>Recent Checks</h1>
            <table className="time-table">
            <thead>
                <tr>
                  <th>Team Name: {user.name}</th>
                  <th>{`${object.time[0]}`}</th>
                  <th>{`${object.time[1]}`}</th>
                  <th>{`${object.time[2]}`}</th>
                  <th>{`${object.time[3]}`}</th>
                  <th>{`${object.time[4]}`}</th>
                </tr>
            </thead>
            <tbody>
              {object.services.map((element, index) => {
                return (
                  <tr>
                    <td>{`${element.name}:${getPortName(element.port)}`}</td>
                    <td>{getArrow(element.history[0].status)}</td>
                    <td>{getArrow(element.history[1].status)}</td>
                    <td>{getArrow(element.history[2].status)}</td>
                    <td>{getArrow(element.history[3].status)}</td>
                    <td>{getArrow(element.history[4].status)}</td>
                  </tr>
                ) 
              })}
          </tbody>
      </table>
      </div>
    );
}
