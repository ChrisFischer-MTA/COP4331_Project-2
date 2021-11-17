import React from 'react';
import '../styles/styles.css';

export default class Status extends React.Component {
	online = <i className="fas fa-solid fa-arrow-up online"></i>;
	offline = <i className="fas fa-solid fa-arrow-down offline"></i>;

	constructor(props) {
		super(props);
		this.state = {
			sessionId: props.sessionId,
			entries: [
				{name:"www.google.com (HTTPS)", time: new Date().toLocaleString(), arrow: false},
				{name:"www.google.com (HTTPS)", time: new Date().toLocaleString(), arrow: false},
				{name:"www.google.com (HTTPS)", time: new Date().toLocaleString(), arrow: false},
				{name:"www.google.com (HTTPS)", time: new Date().toLocaleString(), arrow: false},
				{name:"www.google.com (HTTPS)", time: new Date().toLocaleString(), arrow: false}
			]
		}
	}
	
	getArrow(bool) {
		return bool ? this.online : this.offline;
	}

	statusCheck() {
		console.log("fux this shib");
	}

	componentDidMount() {
		setInterval(() => {this.statusCheck()}, 120000);
	}
			//{this.state.entries.map((element) => {return element.name})}

	render() {
		return (
			<div className="page">
			<h1>Recent Checks</h1>
			<table>
			<tr>
				<th>Name</th>
				{this.state.entries.map( (element,index) => {
					return <td>{element.time}</td>
				})}
			</tr>
			<tr>
				<td>David</td>
				{this.state.entries.map( (element,index) => {
					return <td>{this.getArrow(element.arrow)}</td>
				})}
			</tr>
			<tr>
				<td>Paul</td>
				<td>{this.offline}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
			</tr>
			<tr>
				<td>Rich</td>
				<td>{this.offline}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
			</tr>
			<tr>
				<td>Chris</td>
				<td>{this.offline}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
			</tr>
			<tr>
				<td>Blake</td>
				<td>{this.offline}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
			</tr>
			<tr>
				<td>Jason</td>
				<td>{this.offline}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
			</tr>
			<tr>
				<td>Victoria</td>
				<td>{this.offline}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
			</tr>
			</table>
			</div>

		);
	}
}
