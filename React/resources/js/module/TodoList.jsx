var TodoItem = require('./TodoItem.jsx');

var TodoList = React.createClass({
	markAsDone: function (content) {
		this.props.markAsDone(content);
	},

	render: function() {
		var self = this;
		var todos = this.props.todos;

		var list = Object.keys(todos).map(function(id) {
			return (
				<TodoItem key={id} markAsDone={self.markAsDone} todo={todos[id]} />
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