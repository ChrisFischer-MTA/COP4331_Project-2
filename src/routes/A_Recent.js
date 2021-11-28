import {Link} from 'react-router-dom';
import React from 'react';
import axios from 'axios'; import '../styles/styles.css';
import Recent from './Recent.js';

// TODO: ask paul to add teamName to object
export default class ADMIN_RECENT extends React.Component {
    online = <img src="https://i.imgur.com/vMqbblf.png" alt="green arrow"></img>;
    offline = <img src="https://i.imgur.com/fsRnTEo.png" alt="red"></img>;

	constructor(props) {
		super(props);
		this.state = {
            userType: true,
			sid: "69",
            sids: []
        }

        this.goToPage = this.goToPage.bind(this);
	}


    getRecentPages() {
        console.log("Doing a status check");
        axios.post('https://scoring-engine-api.herokuapp.com/api/ourMoney', {sid: this.state.sid})
            .then(response => {
                if (response.data.error === "") {
                    console.log(response.data);
                    let sids = [];

                    response.data.sids.forEach((sid,i) => {
                        sids.push({teamSid: sid, teamName: `Team${i}`});
                    });

                    this.setState({
                        sids: sids
                    });
                }

                else {
                    console.log("But not really tho");
                }})
            .catch((err) => {
                console.log("Error: " + err);
            });
    }

    goToPage(event) {
        event.preventDefault();

    }

	componentDidMount() {
        this.getRecentPages();
	}

	render() {
		return (
            <div className="page">
                <h1>Admin Recent View</h1>
                <table className="time-table">
                <thead><th>Teams</th></thead>
            {this.state.sids.map((element) => {
                    console.log(element)
                        return(<tr><td className="recent-link"><Link 
                                    key={element.teamSid}
                                    to={{
                                        pathname: "/recent",
                                        search: `?sid=${element.teamSid}`
                                    }}
                            >{element.teamName}</Link></td></tr>
                        )})
            }
            </table>
            </div>
		);
	}
}

