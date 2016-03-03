import React from 'react';
import StoreItems from './StoreItems.js'
import StoreCart from './StoreCart.js'

class App extends React.Component {
	render() {
		return (<div>
			<h1> Welcome to iTunes </h1>
			<StoreItems />

			<h1> Cart </h1>
			<StoreCart />
		</div>);
	};
};

module.exports = App; 
