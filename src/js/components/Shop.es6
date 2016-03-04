import React from 'react';
import StoreItems from './StoreItems.js';
import StoreCart from './StoreCart.js';
import Header from './Header.js';

export default class Shop extends React.Component {
	render() {
		return (<div className='container'>
			<Header />
			<h1> Welcome to iTunes </h1>
			<StoreItems />

			<h1> Cart </h1>
			<StoreCart />
		</div>);
	};
};
