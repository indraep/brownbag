jest.mock('../../dispatcher/AppDispatcher');

var AppDispatcher;
var TodoStore;

describe('TodoStore', () => {

	var callback;
	var TodoConstants = require('../../constants/TodoConstants');

	var actionTodoCreate = {
		source: 'VIEW_ACTION',
		action: {
			actionType: TodoConstants.INPUT_TODO_ITEM,
	      	data: {
	      		content: "new todo",
	      		priority: "LOW"
	      	}
	    }
	};

	var actionTodoDone = {
		source: 'VIEW_ACTION',
		action: {
			actionType: TodoConstants.MARK_AS_DONE,
	      	data: {
	      		content: "Todo 2"
	      	}
	    }
	};

	beforeEach(() => {
		
		AppDispatcher  = require('../../dispatcher/AppDispatcher');
		TodoStore = require('../../stores/TodoStore');
		callback = AppDispatcher.register.mock.calls[0][0];
	});

	it('default value', () => {
		expect(TodoStore.getTitle()).toEqual("Bli Todo List");
		expect(TodoStore.getTodos().length).toEqual(3);
	});

	it('add todo', () => {
		callback(actionTodoCreate);
		
		expect(TodoStore.getTodos().length).toEqual(4);
	});

	it('done todo', () => {
		callback(actionTodoDone);
		
		expect(TodoStore.getTodos().length).toEqual(3);
		expect(TodoStore.getTodos()[1].done).toEqual(true);
	});

});