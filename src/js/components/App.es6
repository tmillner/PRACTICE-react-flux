import React from 'react';
import Shop from './Shop';
import Cart from './Cart';
import Playlist from './Playlist';
import Template from './Template';
import Router from 'react-router-component';
const Locations = Router.Locations;
const Location = Router.Location;

class App extends React.Component {
	render() {
		return (<Template>
			<Locations>
			<Location path="/" handler={Shop} />
			<Location path="/cart" handler={Cart} />
			<Location path="/playlist" handler={Playlist} />
			</Locations>
		</Template>);
	};
};

module.exports = App; 

/**
1 - Wireframe desired App, solidify on workflow
2 - Set up Baseline App, Actions, Constants, and Dispatcher, use this
   to verify the View -> Action -> Dispatcher -> (some verification (log))
3 - Add the store
4a - Redo App to account for store and some more Views
4b - Reshuffle Views to make sense (Component(Component(...)))
5 - Reshuffle flat dir structure
6 - Redo App and Views to account for routing 
7) ITERATE
**/