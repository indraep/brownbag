var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var TodoConstants = require('../constants/TodoConstants');

// Initial value
var _title = "Bli Todo List";
var _todos = [
	{
		priority: "high", content: "Todo 1", done: false
	},
	{
		priority: "medium",
		content: "Todo 2",
		done: false
	},
	{
		priority: "low",
		content: "Todo 3",
		done: true
	}
];

function addTodo(priority, content) {
	_todos.push({
		priority: priority, content: content, done: false
	});
}

function markAsDone(content) {
	var i, len = _todos.length;
	for (i = 0; i < len; i++) {
		if (_todos[i].content === content) {
			_todos[i].done = true;
		}
	}
}

var TodoStore = _.extend({}, EventEmitter.prototype, {
	getTitle: function() {
		return _title;
	},

	getTodos: function() {
		return _todos;
	},

	// Default Store Functions
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	emitChange: function() {
		this.emit('change');
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.actionType) {
		case TodoConstants.INPUT_TODO_ITEM :
			addTodo(action.data.priority, action.data.content);
			break;

		case TodoConstants.MARK_AS_DONE :
			markAsDone(action.data.content);
			break;

		default :
			return true;
	}

	TodoStore.emitChange();

	return true;
});

module.exports = TodoStore;
