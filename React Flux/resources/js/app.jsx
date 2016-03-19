window.React = require('react');
ReactDOM = require('react-dom');

var Todo = require('./components/Todo.jsx');

ReactDOM.render (
	<Todo />,
	document.getElementById('container')
);