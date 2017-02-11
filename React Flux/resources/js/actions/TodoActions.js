var ActionsHelper = require('./ActionsHelper');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
	addTodo: function(priority, content) {
		var data = {
			priority: priority,
			content: content
		}

		ActionsHelper.dispatch(TodoConstants.INPUT_TODO_ITEM, data);
	},

	markAsDone: function(content) {
		var data = {
			content: content
		}

		ActionsHelper.dispatch(TodoConstants.MARK_AS_DONE, data);	
	}
}

module.exports = TodoActions;