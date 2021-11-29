import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/styles.css';
import {useUser} from '../User';

function statusCheck(setObject, sid) {
  console.log("Doing a status check");
  axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
    { sid }
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
          });
        });

        teams.push({
          teamName: team.name,
          upCount: upCount,
          downCount: downCount 
        });
      })

      setObject({
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

export default function Team() {
  const { user } = useUser();
  const [ object, setObject ] = useState({ teams: [] });

  useEffect( 
    () => {
      statusCheck(setObject, user.sid);
      setInterval( () => statusCheck(setObject, user.sid), 5000);
    }, 
    []
  );

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
          {object.teams.map((element) => {
            return (
              <tr>
                <td>{element.teamName}</td>
                <td>{element.upCount}</td>
                <td>{element.downCount}</td>
              </tr>
            );
          })}
        </tbody>
    </table>
  </div>
  );
}
