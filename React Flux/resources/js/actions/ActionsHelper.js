var AppDispatcher = require('../dispatcher/AppDispatcher');

var ActionsHelper = {
	dispatch: function(actionType, data) {
		AppDispatcher.handleAction({
        	actionType: actionType,
        	data: data
		});
	}
};

module.exports = ActionsHelper;