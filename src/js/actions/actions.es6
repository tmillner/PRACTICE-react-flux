import MainConstants from '../constants/constants.js';
import MainDispatcher from '../dispatchers/dispatcher.js';


// NOTE : Only classes can close of their methods with ;
// Since this is an object, must use commas!
// When an action is dispatched ALL of the methods are checked
var MainActions = {
	play(track) {
		new MainDispatcher().handleTheActions({
			actionType : MainConstants.PLAY_TRACK,
			track : track
		});
	},

	pause(track) {
		var m = new MainDispatcher();
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
		new MainDispatcher().handleTheActions({
			actionType : MainConstants.NEXT_TRACK,
			track : nextTrack
		});
	},

	previous(previousTrack) {
		new MainDispatcher().handleTheActions({
			actionType : MainConstants.PREVIOUS_TRACK,
			track : previousTrack
		});
	},
};

module.exports = MainActions;