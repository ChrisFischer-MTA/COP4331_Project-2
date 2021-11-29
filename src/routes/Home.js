import React from 'react/';
import '../styles/styles.css';
import Registration from './Registration';
import AddTeam from './AddTeam';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
    constructor(props) {
            super(props);
            this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        }
        
        handleSuccessfulAuth(sid, userType) {
            /*
            this.setState({
                loggedIn: true,
                sid: sid,
                isAdmin: (userType === 'admin') ? true : false
            });
            */
            console.log("Sucessfully logged in");	
            this.props.handleLogin(sid, userType);
            //this.props.history.push("/status");
        }
    render() {
        if (this.props.loggedIn) 
            return (<Link
                        to={{
                            pathname: "/status",
                            state: {...this.props}
                        }}
            />)

        return (
            <div className="page">
                <Registration />
                <AddTeam />
            </div>
          );
    }
}
