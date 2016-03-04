import React from 'react';
import StoreCart from './StoreCart.js';
import Header from './Header.js';

export default class Cart extends React.Component {
	render() {
		return (<div>
			<Header />
			<h1> Cart </h1>
			<StoreCart />
		</div>);
	};
};
