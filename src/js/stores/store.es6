import MainDispatcher from '../dispatchers/dispatcher.js';
import EventEmitter from 'events';
import MainConstants from '../constants/constants.js';

// The store is the critical glue, between dispatcher,
// constants, & actions. It gets initiated from the component
// This should be designed AFTER a wireframe describing what should
// happen on the View levels

let storeItems = [];
let purchaseItems = [];

for(let i=1; i<=10; i++)
{	
	storeItems.push({
	"key" : i,
	"artist" : `Artist ${i}`,
	"song" : `Song ${i}`,
	"cost" : 0.99,
	"album" : `Album ${i}`
	});
};

// Click 'Add' from store items
// Instead of using indexes and parsing through the entire
// array of storeItems, just check if a new specified value is
// is present on such an item, if not add it bc it will be
let addItem = (storeItem) => {
	console.log('addItem was called');
	if(!storeItem.isInCart) {
	// Augment our store item no need to keep it plain
	storeItem['qty'] = 1;
	storeItem['isInCart'] = true
	purchaseItems.push(storeItem);
	}
	else {
		// For each can take an object and the index
		purchaseItems.forEach((item, i) => {
			if (item.key === storeItem.key) {
				increaseItem(i);
			}
		});
	}
};


// Click '+' from purchase items
let increaseItem = (i) => {
	purchaseItems[i].qty++;
};

// Click 'Remove' from purchase items
let removeItem = (i) => {
	purchaseItems[i]['qty'] = 0;
	purchaseItems[i]['isInCart'] = false;
	purchaseItems.splice(i, 1);
};

// Click '-' from purchase items
let decreaseItem = (i) => {
	if(purchaseItems[i].qty > 1) {
		purchaseItems[i].qty--;
	}
	else {
		removeItem(i);
	}
};

let getPurchaseTotal = () => {
	let totalCost = 0, totalCount = 0;
	purchaseItems.forEach((i) => {
		totalCount += i.qty;
		totalCost += i.cost * i.qty;
	});
	return {totalCount, totalCost};
};

// With the above functions, these are all changes
// we thus need to find a way to look for such changes (emit)
// when they occur, binding our stores to the views
// Using assign with a prototype is similar to extend 
// assign(EventEmitter.prototype, { /* Extended methods */})
class MainStore extends EventEmitter {
	constructor() {
		// The following properties listed are NEEDED, won't ref
		// without
		super(); 
		this.CHANGE = 'MAIN_STORE_CHANGE'

		this.getPurchaseItems = this.getPurchaseItems.bind(this);
		this.getStoreItems = this.getStoreItems.bind(this);
		this.getPurchaseTotal = this.getPurchaseTotal.bind(this);

		this.dispatcherAction = this.dispatcherAction();

		this.emitChange = this.emitChange.bind(this);
		this.addChangeListener = this.addChangeListener.bind(this);
		this.removeChangeListener = this.removeChangeListener.bind(this);
	};

	// This NEEDS to be bound! Since it's not an EventEmitter prop
	// (it just uses emit which is up the prototype stack)
	emitChange() {
		this.emit(this.CHANGE);
	};

	// Should be triggered on componentWillMount
	// No need to bind, this is an EventEmitter property
	addChangeListener(cb) {
		this.on(this.CHANGE, cb);
	};

	// Should be triggered on componentWillUnmount
	// No need to bind, this is an EventEmitter property
	removeChangeListener(cb) {
		this.removeListener(this.CHANGE, cb);
	};

	getPurchaseItems() {
		return purchaseItems;
	};

	// No need to bind storeItems, according to log, it's correct
	getStoreItems() {
		return storeItems;
	};

	getPurchaseTotal() {
		return getPurchaseTotal();
	};

	// Going to change this dispatchAction -> dispatchIndex
	// https://facebook.github.io/flux/docs/todo-list.html
	// The prototype already contains this method (can print out)
	dispatcherAction() {
		console.log('in dispatcher!');
		return MainDispatcher.register((payload) => {
			let action = payload.action;
			switch(action.actionType) {
				case MainConstants.ADD_ITEM :
					console.log('made it inside of action switch');
					addItem(action.item);
					break;
				case MainConstants.INCREASE_ITEM :
					increaseItem(action.index);
					break;
				case MainConstants.REMOVE_ITEM :
					removeItem(action.index);
					break;
				case MainConstants.DECREASE_ITEM :
					decreaseItem(action.index);
					break;		
			};
			this.emitChange();
			return true;
		});
	};
};
// Return ONLY 1 pre-instantiated Store, if we 
// return the Class and multiple Stores are created
// on components, upon dispatch, actions are triggered
// per each component -- multiple times (yikes!)
export default new MainStore();