window.React = require('react');
ReactDOM = require('react-dom');

var Todo = require('./components/Todo.jsx');

ReactDOM.render (
	<Todo />,

	/* global document */
	document.getElementById('container')
);