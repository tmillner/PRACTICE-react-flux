import {Dispatcher} from 'flux';
import assign from 'react/lib/Object.assign';

// Using assign with a new instance is NOT the same as extend
// on a class (see commented out of failed attempt)
export default assign(new Dispatcher(), {
	handleTheActions(action) {
		console.log('New action:', action);
		this.dispatch({
			source : "MAIN_DISPATCHER",
			action : action
		});
	}
});

/*
import {Dispatcher} from 'flux';

export default class MainDispatcher extends Dispatcher {
	constructor() {
		super(); // DON'T FORGET SUPER!
		// With static functions don't bind to class instances (this)
		// So if handeTheActions was static, don't add the below
		this.handleTheActions = this.handleTheActions.bind(this);
	};

	handleTheActions(action) {
		console.log('New action:', action);
		this.dispatch({
			source : "MAIN_DISPATCHER",
			action : action
		});
	};
};
*/