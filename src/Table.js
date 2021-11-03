import React from 'react';
import './styles/styles.css';

export default class Table extends React.Component {
	online = <i className="fas fa-solid fa-arrow-up online"></i>;
	offline = <i className="fas fa-solid fa-arrow-down offline"></i>;

	constructor(props) {
		super(props);
		this.state = {
			entries: [
				{time: "empty1", arrow: false},
				{time: "empty2", arrow: false},
				{time: "empty3", arrow: false},
				{time: "empty4", arrow: false},
				{time: "empty5", arrow: false}
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

	render() {
		return (
			<div>
			<h1>Recent Checks</h1>
			<table>
			<tr>
				<th>Name</th>
				<th>{this.state.entries[0].time}</th>
				<th>{this.state.entries[1].time}</th>
				<th>{this.state.entries[2].time}</th>
				<th>{this.state.entries[3].time}</th>
				<th>{this.state.entries[4].time}</th>
			</tr>
			<tr>
				<td>David</td>
				<td>{this.getArrow(this.state.entries[0].arrow)}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
				<td>{this.online}</td>
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

