import React from 'react';
import MainStore from '../stores/store.js'
import Remove from './Remove.js';
import Decrease from './Decrease.js';
import Increase from './Increase.js';

// The items in the cart to buy
// | Remove | Item | Quantity | [Decrease][Increase] | Total |
class StoreCart extends React.Component {
	constructor() {
		super();
		this.mainStore = new MainStore();
		this.state = {
			items : this.mainStore.getPurchaseItems() 
		};
	};

	// We need a way to make this comonent continually update
	// when changes around the app are done (re setting set state)
	// Listen by binding event listener
	// This is first invoked by the StoreItems Add
	componentWillMount() {
		console.log('Mounted StoreCart items B4:', this.state.items);
		console.log('Purchase items are ', this.mainStore);
		this.mainStore.addChangeListener(this._onChange);
	};

	_onChange() {
		console.log('Mounted StoreCart items A2 1:', this.state.items);
		this.setState({
			items : this.mainStore.getPurchaseItems()
		});
		console.log('Mounted StoreCart items A2 2:', this.state.items);
	};

	render() {
		let items = this.state.items.map((item, i) => {
			let total, subtotal = 0;
			subtotal = item.cost * item.qty;
			total += subtotal;
			// NOTE: the indexes and keys are generated dynamically
			// based on the array that is created on update
			return (<tr key={i}>
				<td><Remove index={i}/></td>
				<td>{item.artist} / {item.song}</td>
				<td>{item.qty}</td>
				<td><Decrease index={i} /><Increase index={i} /></td>
				<td>{subtoal}</td>
			</tr>);
		});

		return (<table>
			<thead>
				<tr>
					<th> Remove </th>
					<th> Item </th>
					<th> Quantity </th>
					<th>  </th>
					<th> Total </th>
				</tr>
			</thead>
			<tbody>
				{items}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan='4'> </td>
					<td>{this.mainStore.getPurchaseTotal}</td>
				</tr>
			</tfoot>
			</table>);
	};
};

module.exports = StoreCart; 
