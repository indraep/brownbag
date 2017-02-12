var React = require('react');

var TodoActions = require('../actions/TodoActions');

function getPriority(level) {
	return level.charAt(0).toUpperCase();
}

var TodoItem = React.createClass({
	handleMarkAsDone: function(content) {
		TodoActions.markAsDone(content);
	},

	render: function() {
		var todo = this.props.todo;

		if (todo.done) {
			return (
				<li className='done'>
					{todo.content}
					<span className={"level " + todo.priority}>
						{getPriority(todo.priority)}
					</span>
				</li>
			);
		} else {
			return (
				<li>
					<button className='is-done' onClick=
						{this.handleMarkAsDone.bind(this, todo.content)}>
						&#10004;
					</button>

					{todo.content}

					<span className={"level " + todo.priority} >
						{getPriority(todo.priority)}
					</span>
				</li>
			);
		}
	}
});

module.exports = TodoItem;