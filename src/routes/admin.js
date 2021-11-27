import React from 'react';
import axios from 'axios';
import '../styles/styles.css';


export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: props.sid
        }

        this.callAddCompetition = this.callAddCompetition.bind(this);

    }

    callAddCompetition(event) {
        event.preventDefault();
        axios.post('', {
        }).then((response) => {
            console.log("Success" + response.data);
        })
        .catch((err) => {
            console.log("Error: " + err);
        });

    }

    render() {
        return (
            <div className="page">
                <h1>Admin</h1>
            </div>
        )

    }

}
