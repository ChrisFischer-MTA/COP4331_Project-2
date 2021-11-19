import React from 'react';
import '../styles/admin.css'
import NavBar from '../NavBar';
import useState from 'react';

export default class Admin extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            teamNumber: 0,
            servNumber: 0,
            arr: "",
            show:false,
            compete: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    };

    spwn(x) 
    {
		let ret = [];
		for (let i = 0; i < x; i++){
			let x = (i+1) * 100
			ret.push(<div 
                key = {i*100 +1} 
                type="text"
                name={`name+${x}`} 
            />);
		}

		return ret;
	};

    handleSubmit(event)
    {
        event.preventDefault();
		let data = new FormData(event.target);
		data.forEach((key,value) => {console.log(key)});
    };

    onCancel(event)
    {

    };
    
    render()
    {
        const blankSlate = async event =>
        {
            // API call
            // Indicate current competition is to be wiped  
        };
        const notes = async event =>
        {
            /*
            This is just to keep things straight for me:
            What admin asks for so far:
                How many teams
                How many services
                What services
            What we need to send to API:
                Hardcoded session ID (just for testing)
                How many teams
                startTime
                endTime
                machine array
            */
        };
        return(
        <div>
            <NavBar/><br/><br/><br/>
            <span id = 'inner-title'>Admin Page</span><br/>

            {this.state.compete?
            <div>
            <input type="text" id="MachineName" placeholder="Machine Name?" /><br/>
            <input type="text" id="MachineName" placeholder="Machine Name?" /><br/>
            <input type="number" id="servNum" placeholder="How many services?" /><br/>

            <button id = "newCom" onClick={() => {

                if(document.getElementById("teamNum").value > 0 & document.getElementById("servNum").value > 0)
                {
                    this.setState(
                    {
                        teamNumber: document.getElementById("teamNum").value,
                        servNumber: document.getElementById("servNum").value,
                        show:true
                    });
                        document.getElementById("newCom").style.display = "none";
                        document.getElementById("servNum").style.display = "none";
                        document.getElementById("teamNum").style.display = "none";
                }

                else
                {
                    alert("Input fields must have a positive integer to proceed")
                }}}>Add Machine

            </button>

            {this.state.show ? 
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        {this.spwn(this.state.servNumber)}

                        <button id = "sub" type="submit"> Submit Services</button>
					</form>

                </div> : null} 
            </div> : <div>
                <input type="submit" id="BlankSlateButton" value="Delete Competition"
                        onClick={() => { 
                            if (window.confirm('Are you sure you wish to delete this competition?')) 
                                this.onCancel()
                        }}/>
            </div>}
        </div>
        );
    }
};

