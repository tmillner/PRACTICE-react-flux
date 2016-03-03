import MainConstants from '../constants/constants.js';
import MainDispatcher from '../dispatchers/dispatcher.js';


// NOTE : Only classes can close of their methods with ;
// Since this is an object, must use commas!
// When an action is dispatched ALL of the methods are checked
var MainActions = {
	play(track) {
		MainDispatcher.handleTheActions({
			actionType : MainConstants.PLAY_TRACK,
			track : track
		});
	},

	pause(track) {
		var m = MainDispatcher;
		for (let p in m)
		{
			console.log(`property ${p}`);
		};
		m.handleTheActions({
			actionType : MainConstants.PAUSE_TRACK,
			track : track
		});
	},

	next(nextTrack) {
		MainDispatcher.handleTheActions({
			actionType : MainConstants.NEXT_TRACK,
			track : nextTrack
		});
	},

	previous(previousTrack) {
		MainDispatcher.handleTheActions({
			actionType : MainConstants.PREVIOUS_TRACK,
			track : previousTrack
		});
	},

	add(item) {
		MainDispatcher.handleTheActions({
			actionType : MainConstants.ADD_ITEM,
			item : item
		});
	},

	increase(i) {
		MainDispatcher.handleTheActions({
			actionType : MainConstants.INCREASE_ITEM,
			index : i
		});
	},

	remove(i) {
		MainDispatcher.handleTheActions({
			actionType : MainConstants.REMOVE_ITEM,
			index : i
		});
	},

	decrease(i) {
		MainDispatcher.handleTheActions({
			actionType : MainConstants.DECREASE_ITEM,
			index : i
		});
	},
};

module.exports = MainActions;