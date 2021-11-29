import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/styles.css';
import {useUser} from '../User';

function getPortName(x) {
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

function statusCheck(setObject, sid) {
  console.log("Doing a status check");
  console.log(`sid: "${sid}"`);
  axios.post(
    'https://scoring-engine-api.herokuapp.com/api/statusHistory',
    { sid }
  ).then(response => {
    if (response.data.error === "") {
      console.log("Success");
      console.log(response.data);
      let teams = []
      let services = []

      response.data.teams[0].machines.forEach((machine)=> {
        machine.services.forEach((service) => {
          services.push(`${service.name}:${getPortName(service.port)}`)
        });
      });

      console.log(services);
      setObject(prevState => { 
        return { ...prevState, services: services } 
      });
      // team -> name, services

      response.data.teams.forEach((team) => {
        services = []
        team.machines.forEach((item) => {
          item.services.forEach((service) => {
            services.push({
              upCount: service.upCount,
              downCount: service.downCount
            });
          });
        });

        teams.push({
          name: team.name,
          services: services
        });
      })

      console.log(teams)
      setObject(prevState => { 
        return { ...prevState, teams: teams } 
      });
    }

    else {
      console.log("But not actually a success");
      console.log(response);
    }
  }).catch(err => {
    console.log("Error\n" + err);
  });

}

export default function AdminService() {
  const { user } = useUser();
  const [ object, setObject ] = useState({ teams: [], services: [] });
  console.log(object);

  function effect() {
    statusCheck(setObject, user.sid);
    setInterval( () => statusCheck(setObject, user.sid), 5000);
  }

  useEffect(effect, []);

  return (
    <div className="page">
    <h1>Service View</h1>
    <table>
      <thead>
        <tr>
          <th>Teams/Services</th>
          {object.services.map((service) => {
              return <th>{service}</th>;
          })}
        </tr>
      </thead>
      <tbody> {
        object.teams.map((team, index) => {
          return(
            <tr>
              <td>{team.name}</td> 
              {team.services.map((element) => {
                let total = element.upCount + element.downCount;
                let percent = (100 * (element.upCount / total)).toFixed(2);
                return <td>{`${percent}%`}</td>
              })}
            </tr>
          );
        })
      }</tbody>
    </table>
    </div>
  );
}
