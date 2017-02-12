var TodoItem = require('./TodoItem.jsx');

var TodoList = React.createClass({
	render: function() {
		var todos = this.props.todos;

		var list = Object.keys(todos).map(function(id) {
			return (
				<TodoItem key={id} todo={todos[id]} />
			);
		});

		return (
			<ul>
				{list}
			</ul>
		);
	}
});

module.exports = TodoList;