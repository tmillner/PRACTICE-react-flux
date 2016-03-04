import React from 'react';
import MainStore from '../stores/store.js'
import Remove from './Remove.js';
import Decrease from './Decrease.js';
import Increase from './Increase.js';
import StoreMixin from './StoreMixin'; // Store as in container


// The items in the cart to buy
// | Remove | Item | Quantity | [Decrease][Increase] | Total |
const StoreCart = (props) => {
	let items = props.items.map((item, i) => {
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
			<td>{subtotal}</td>
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
				<td style={{color: "white", backgroundColor: "black"}}>{MainStore.getPurchaseTotal().totalCost}</td>
			</tr>
		</tfoot>
	</table>);
};

// Export the RESULT of calling the function,
//  the caller can name this module whatever
export default StoreMixin(StoreCart, {
	items : MainStore.getPurchaseItems()
});

/*
NOTE AN alternative to using static components is to create class
BUT specify the constructor (potential duplication at the cost
of hashing out the class better)

class StoreCart extends React.Component {
	constructor() {
		super();
		this.state = {
			items : []
		};
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
				<td>{subtotal}</td>
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
					<td style={{color: "white", backgroundColor: "black"}}>{MainStore.getPurchaseTotal().totalCost}</td>
				</tr>
			</tfoot>
			</table>);
	};
};

export default StoreMixin(StoreCart, {
	items : MainStore.getPurchaseItems()
});

*/
