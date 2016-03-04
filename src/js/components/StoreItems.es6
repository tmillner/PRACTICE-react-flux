import React from 'react';
import MainStore from '../stores/store.js'
import Add from './Add.js';

// The table of items in the store
class StoreItems extends React.Component {
	constructor() {
		super();
		this.state = {
			items : MainStore.getStoreItems() 
		}
	}

	// NOTE: The method below is a ReactComonent method
	// When using JS Classes, must use state property instead, else console
	// err: Warning: getInitialState was defined on StoreItems, a plain
	// JavaScript class. This is only supported for classes created using 
	// React.createClass. Did you mean to define a state property instead?
	/*
	getInitialState() {
		return { items : MainStore.getStoreItems() };
	};
	*/

	// NOTE: Instead of always creating new functions in the 
	// constructur and pointing to the definition,
	// can just use the function in the body where it's used
	render() {
		let items = this.state.items.map((item) => {
			return (<tr key={item.key}>
				<td>{item.artist} / {item.song}</td>
				<td>$ {item.cost} </td>
				<td><Add item={item}/></td>
			</tr>);
		});

		return (<table className='table table-striped'><tbody>{items}</tbody></table>);
	};
};

module.exports = StoreItems; 
