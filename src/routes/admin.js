import React from 'react';
import '../styles/admin.css'
import NavBar from '../NavBar';
import { tsImportEqualsDeclaration } from '@babel/types';

export default class Admin extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            machineNumber: 0,
            servNumber: 0,
            arr: "",
            show1:false,
            compete: true
        };

    };

    iterServices(event)
    {
        
    }

    iterDiv(event) 
    {
        event.preventDefault();
        let data = new FormData(event.target);
        let x = parseInt(data.get('MachineNum'));
        console.log(x)
		let ret = [];
		for (let i = 0; i < x; i++){
			ret.push(<div>
                <form>
                    <input type="text" id="MachineName" placeholder="Machine Name?" /><br/>
                    <input type="number" id="servNum" placeholder="How many services?" /><br/>
                    <button id = "addList" onClick={() => {
                        document.getElementById("MachineName").style.display = "none";
                        document.getElementById("servNum").style.display = "none";
                        document.getElementById("addList").style.display = "none";
                        }}>Add Service</button>
                </form>
            </div>)
		}
        console.log(ret);
		return ret;
	};

    render()
    {
        var machine = 0;
        return(
            <div>
                <NavBar/><br/><br/><br/>
                <h1>Admin Page</h1>
            <form onSubmit = {this.iterDiv}>
                <input type="text" name="competeN" placeholder="Name of Competition?" /><br/>
                <input type="number" name="MachineNum" placeholder="How many machines?" /><br/>
                
                <button id = "b1" type="submit">Add Machine</button>
            </form>
            </div>
        );
    }
};