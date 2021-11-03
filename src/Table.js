import React from 'react';
import './styles/styles.css';

class Table extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<table>Recent Checks
			<tr>
				<th>Name</th>
				<th>Current Status</th>
			</tr>
			<tr>
				<td>David</td>
				<td><i className="fas fa-solid fa-arrow-down"></i></td>
			</tr>
			<tr>
				<td>Paul</td>
				<td><i className="fas fa-solid fa-arrow-down"></i></td>
			</tr>
			<tr>
				<td>Rich</td>
				<td><i className="fas fa-solid fa-arrow-down"></i></td>
			</tr>
			<tr>
				<td>Chris</td>
				<td><i className="fas fa-solid fa-arrow-down"></i></td>
			</tr>
			<tr>
				<td>Blake</td>
				<td><i className="fas fa-solid fa-arrow-down"></i></td>
			</tr>
			<tr>
				<td>Aaron</td>
				<td><i className="fas fa-solid fa-arrow-down"></i></td>
			</tr>
			<tr>
				<td>Chakra</td>
				<td><i className="fas fa-solid fa-arrow-down"></i></td>
			</tr>
			</table>

		);
	}
}

export default Table;
