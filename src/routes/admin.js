import React from 'react';
import '../styles/admin.css'
//import {confirmAlert} from 'react-confirm-alert';
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
            arr: [],

            show:false,
            compete: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    spwn(x) 
    {
		let ret = [];
		for (let i = 0; i < x; i++){
			ret.push(<input 
                key = {i*100 +1} 
                type="text"
                name={`name+${i*100+1}`} 
            />);
		}
		//console.log("The array is at 1: " + ret[1]);
		return ret;
	}

    handleChange(event)
    {
        
    }

    handleSubmit(event)
    {
        alert("fuck you");
        console.log(event.target.data);
        event.preventDefault()
    }

    

    render() {
        function exerciseOne(stuff)
        {
            stuff.forEach(x=>console.log(x));
        }
        const blankSlate = async event =>
        {
            // API call
            // Indicate current competition is to be wiped  
        };

        return(
        <div>
            <NavBar/><br/><br/><br/>
            <span id = 'inner-title'>Admin Page</span><br/>

            {this.state.compete?
            <div>
            <input type="number" id="teamNum" placeholder="Number of teams" />
            <input type="number" id="servNum" placeholder="Number of services" /><br/>

            <button id = "newCom" onClick={() => {
                if(document.getElementById("teamNum").value > 0 & document.getElementById("servNum").value > 0)
                {
                    this.setState(
                    {
                        teamNumber: document.getElementById("teamNum").value,
                        servNumber: document.getElementById("servNum").value,
                        arr: new Array(this.state.servNumber),
                        show:true
                    });
                        document.getElementById("newCom").style.display = "none";
                        document.getElementById("servNum").style.display = "none";
                        document.getElementById("teamNum").style.display = "none";
                }

                else
                {
                    alert("Input fields must have a positive integer to proceed")
                }}}>New Competition
            </button>

            {this.state.show? 
                <div>
                    <form onSubmit = {this.handleSubmit}>{this.spwn(this.state.servNumber)}</form>
                    
                    <button id = "sub" type="submit">Submit Services
                    </button>

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
/*<button onClick={(e)=>this.addField(e)}>Add thing</button> */