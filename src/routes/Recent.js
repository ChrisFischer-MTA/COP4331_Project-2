import React from 'react';
import axios from 'axios';
import '../styles/styles.css';

export default class Recent extends React.Component {
  online = <img src="https://i.imgur.com/vMqbblf.png" alt="green arrow"></img>;
  offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="red arrow"></img>;

	constructor(props) {
		super(props);
            const params = new URLSearchParams(window.location.search);
            this.state = {
                sid: params.has('sid') ? params.get('sid') : props.sid,
                userType: props.userType,
                teamName: "",
                services: [],
                time : []
            }
	}

  statusCheck() {
    console.log("Doing a status check");
    axios.post('https://scoring-engine-api.herokuapp.com/api/statusHistory',
    {
      sid: this.state.sid
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
          time: [services[0].history[0].timestamp,
            services[0].history[1].timestamp,
            services[0].history[2].timestamp,
            services[0].history[3].timestamp,
            services[0].history[4].timestamp]
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
		setInterval(() => {this.statusCheck()}, 120000);
	}

  render() {
    return (
      <div className="page">
        {console.log(this.state.sid)}
        <h1>Recent Checks</h1>
            <table className="time-table">
            <thead>
                <tr>
                  <th>Team Name: {this.state.teamName}</th>
                  <th>{`${this.state.time[0]}`}</th>
                  <th>{`${this.state.time[1]}`}</th>
                  <th>{`${this.state.time[2]}`}</th>
                  <th>{`${this.state.time[3]}`}</th>
                  <th>{`${this.state.time[4]}`}</th>
                </tr>
            </thead>
            <tbody>
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
