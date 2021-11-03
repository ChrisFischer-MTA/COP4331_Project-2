import React from 'react';
import './styles/styles.css';

class Table extends React.Component {
	online = <i className="fas fa-solid fa-arrow-up online"></i>;
	offline = <i className="fas fa-solid fa-arrow-down offline"></i>;

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
			<h1>Recent Checks</h1>
			<table>
			<tr>
				<th>Name</th>
				<th>Current Status</th>
			</tr>
			<tr>
				<td>David</td>
				<td>{this.online}</td>
			</tr>
			<tr>
				<td>Paul</td>
				<td>{this.offline}</td>
			</tr>
			<tr>
				<td>Rich</td>
				<td>{this.offline}</td>
			</tr>
			<tr>
				<td>Chris</td>
				<td>{this.offline}</td>
			</tr>
			<tr>
				<td>Blake</td>
				<td>{this.offline}</td>
			</tr>
			<tr>
				<td>Aaron</td>
				<td>{this.offline}</td>
			</tr>
			<tr>
				<td>Chakra</td>
				<td>{this.offline}</td>
			</tr>
			</table>
			</div>

		);
	}
}

export default Table;
