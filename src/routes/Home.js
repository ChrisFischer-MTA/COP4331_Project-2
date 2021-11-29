import React from 'react/';
import '../styles/styles.css';
import Login from './Login';
import Registration from './Registration';

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
            this.props.history.push("/status");
        }
    render() {
      return (
        <div className="page">
        <Registration handleSucessfulAuth={this.handleSuccessfulAuth}/>
		<Login loggedIn={this.props.loggedIn} handleSuccessfulAuth={this.handleSuccessfulAuth}/>

        </div>
      );
    }
}
