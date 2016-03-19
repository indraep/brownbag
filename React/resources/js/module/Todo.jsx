var Header = require('./Header.jsx');
var TodoList = require('./TodoList.jsx');
var TodoInput = require('./TodoInput.jsx');

var Todo = React.createClass({
	getInitialState: function() {
		//{title: "", todos: [{content: "", priority: "", done: ""}]}
		return this.props.data;
	},

	addTodo: function(content, priority) {
		var currState = this.state;
		currState.todos.push({content: content, priority: priority, done: false});
		
		this.setState(currState);
	},

	markAsDone: function(content) {
		var currState = this.state;

		var i, len = currState.todos.length;
		for (i = 0; i < len; i++) {
			if (currState.todos[i].content === content) {
				currState.todos[i].done = true;
			}
		}

		this.setState(currState);
	},

	render: function() {
		return (
			<div id="content">
				<div id="list-section">
					<Header title={this.state.title} />
					<TodoList markAsDone={this.markAsDone} todos={this.state.todos} />
				</div>
				<TodoInput addTodo={this.addTodo} />
			</div>
		);
	}
});

module.exports = Todo;