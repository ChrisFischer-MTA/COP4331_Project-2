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
        this.iterDiv = this.iterDiv.bind(this);
    };

    iterServices(event)
    {
        
    }

    iterDiv(event) 
    {
        event.preventDefault();
        let data = new FormData(event.target);
        let x = parseInt(data.get('MachineNum'));
		let ret = [];
		for (let i = 0; i < x; i++){
			let ID = i*100+1
            ret.push(
                <div id = {ID}>
                    <form>
                        <input type="text" id={`machinename${ID}`} placeholder="Machine Name?" /><br/>
                        <input type="number" id={`servNum${ID}`} placeholder="How many services?" /><br/>
                        <button id = {`addList${ID}`} >Add Service</button>
                    </form>
                </div>)
		}
        console.log(ret);
		this.setState({arr: ret})
	};

    render()
    {
        return(
            <div>
                <NavBar/>
                <h1>Admin Page</h1>
            <form onSubmit = {this.iterDiv}>
                <input type="text" name="competeN" placeholder="Name of Competition?" /><br/>
                <input type="number" name="MachineNum" placeholder="How many machines?" /><br/>
                
                <button id = "b1" type="submit">Add Machine</button>
            </form>
            <div>
                {this.state.arr}
            </div>
            </div>
        );
    }
};