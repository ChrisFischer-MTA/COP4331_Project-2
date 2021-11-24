import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class Recent extends React.Component {
  online = <img src="https://i.imgur.com/vMqbblf.png" alt="up"></img>;
  offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="down"></img>;

	constructor(props) {
		super(props);
		this.state = {
			sid: props.sessionId,
        teamName: "",
        services: [],
        time1 : "",
        time2 : "",
        time3 : "",
        time4 : "",
        time5 : ""
      }
	}

  statusCheck() {
    console.log("Doing a status check");
    axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
    {
      sid: "619ea9040be11351a40a67fd"
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

        this.setState({
          services: services,
          teamName: data.name,
          time1: services[0].history[0].timestamp,
          time2: services[0].history[1].timestamp,
          time3: services[0].history[2].timestamp,
          time4: services[0].history[3].timestamp,
          time5: services[0].history[4].timestamp
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
		setInterval(() => {this.statusCheck()}, 180000);
	}

	render() {
		return (
			<div className="page">
        <h1> Recent Checks: {this.state.time1}</h1>
        <table>
          <tbody>
            <tr>
              <th>Team Name:{this.state.teamName}</th>
              <th>Current Time</th>
              <th>{this.time2}</th>
              <th>{this.time3}</th>
              <th>{this.time4}</th>
              <th>{this.time5}</th>
            </tr>
            {this.state.services.map((element, index) => {
              return (
                <tr>
                  <td>{`${element.name}:${this.getPortName(element.port)}`}</td>
                  <td>{this.getArrow(element.history[0].status)}</td>
                  <td>{this.getArrow(element.history[1].status)}</td>
                  <td>{this.getArrow(element.history[2].status)}</td>
                  <td>{this.getArrow(element.history[3].status)}</td>
                  <td>{this.getArrow(element.history[4].status)}</td>
                </tr>
              ) 
            })}
          </tbody>
        </table>
      </div>
		);
	}
}
