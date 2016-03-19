window.React = require('react');
ReactDOM = require('react-dom');

var Todo = require('./module/Todo.jsx');

var initialData = {
	title: "Bli Todo",
	todos: [
		{
			priority: "high",
			content: "Todo 1",
			done: false
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
	]
};

ReactDOM.render (
	<Todo data={initialData} />,
	document.getElementById('container')
);