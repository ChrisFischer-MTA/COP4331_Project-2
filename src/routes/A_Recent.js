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
            teams: [],
            services: [],
            time: []
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
          let teams = []
          let services = []
          let data = response.data.teams[0];

          // Timestamps
          data.machines.forEach((element) => {
            element.services.forEach((item) => {
              services.push({
                history: item.history
              });
            })
          });

          this.setState(
            {time: [services[0].history[1].timestamp,
                    services[0].history[2].timestamp,
                    services[0].history[3].timestamp,
                    services[0].history[4].timestamp]});
          
          // team -> name, services, ports

          response.data.teams.forEach((team) => {
              services = []
              team.machines.forEach((item) => {
                  item.services.forEach((service) => {
                    services.push(`${team.name}  ${service.name}:${this.getPortName(service.port)}`)
                  })
              });

              teams.push({
                  teamName: team.name,
                  services: services,
              })

          })

          this.setState({
            teams: teams,
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

    getPortName(x) {
      // Port types
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
		setInterval(() => {this.statusCheck()}, 180000);
	}

	render() {
		return (
			<div className="page">
			<h1>Status</h1>
			<table>
        <thead>
          <tr>
            <th>Teams/Services</th>
            <th>Current Time</th>
            {this.state.time.map((minute) => {
              return <th>{minute}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {console.log("stuff:")}
          {console.log(this.state.teams)}
          {this.state.teams.map((team) => {
              {team.services.map((service) => {
                return (
                  <tr>
                  <td>{team.teamName}:{service}</td>
                  {team.services.map((service) => {
                    return <td>{this.getArrow(service)}</td>
                    })
                  }
                  </tr>
                )
              })}
          })}
        </tbody>
      </table>
    </div>
		);
	}
}

