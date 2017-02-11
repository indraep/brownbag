var TodoStore = require('../stores/TodoStore');

var Header = require('./Header.jsx');
var TodoList = require('./TodoList.jsx');
var TodoInput = require('./TodoInput.jsx');

function getState() {
	return {
		title: TodoStore.getTitle(),
		todos: TodoStore.getTodos()
	};
}

var Todo = React.createClass({
	getInitialState: function() {
		return getState();
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function() {
		TodoStore.removeChangeListener(this.onChange);
	},

	onChange: function() {
		this.setState(getState());
	},

	render: function() {
		return (
			<div id='content'>
				<div id='list-section'>
					<Header title={this.state.title} />
					<TodoList markAsDone={this.markAsDone} 
						todos={this.state.todos} />
				</div>
				<TodoInput addTodo={this.addTodo} />
			</div>
		);
	}
});

module.exports = Todo;