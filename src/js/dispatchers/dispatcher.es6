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