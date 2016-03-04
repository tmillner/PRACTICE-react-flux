import React from 'react';
import MainStore from '../stores/store.js'

/*
* stateObject = {items : MainStore.getPurchaseItems()}
*/
export default (InnerClass, stateObject) => {
	return (class extends React.Component {
		constructor() {
			super();
			this.state = {
				items : []
			};
		};

		// We need a way to make this comonent continually update
		// when changes around the app are done (re setting set state)
		// Listen by binding event listener
		// This is first invoked by the StoreItems Add
		componentWillMount() {
			// Although merely adding an Event Listener here is doable
			// and not adding it to constructor, it isn't very clear
			this.onChange = () => {
				this.setState(stateObject);
				console.log('Mounted StoreCart items A2 2:', this.state.items);
			};
			console.log('Mounted StoreCart items B4:', this.state.items);
			console.log('Purchase items are ', MainStore);
			MainStore.addChangeListener(this.onChange);
		};

		// To prevent memory leaks get rid of the mounted component
		componentWillUnmount() {
			MainStore.removeChangeListener(this.onChange);
		};

		render() {
			return (<InnerClass 
				{...this.props}
				{...this.state}
			/>);
		}
	});
};


