var _priorities = ["low", "medium", "high"];

function getPriority(level) {
	return level.charAt(0).toUpperCase();
}

var TodoInput = React.createClass({
	getInitialState: function() {
		return {
			priority: "medium",
			content: ""
		};
	},

	handleContentChange: function(e) {
		this.setState({priority: this.state.priority, content: e.target.value});
	},

	handlePriorityChange: function(e) {
		this.setState({priority: e.target.value, content: this.state.content});	
	},

	handleAddTodo: function(e) {
		if (this.state.content) {
			this.props.addTodo(this.state.content, this.state.priority);
			this.setState(getInitialState());
		}
	},

	render: function() {
		var priorityOptions = Object.keys(_priorities).map(function(id){
			return (
				<option key={id} value={_priorities[id]}>
					{_priorities[id] + " (" + getPriority(_priorities[id]) + ")"}
				</option>
			);
		});

		return (
			<div id="add-section">
				<input onChange={this.handleContentChange} value={this.state.content} 
					type="text" placeholder="Tambah to do baru"></input>
				
				<select onChange={this.handlePriorityChange} value={this.state.priority}>
					{priorityOptions}
				</select>
				
				<button onClick={this.handleAddTodo} id="add">&#43;</button>
			</div>
		);
	}
});

module.exports = TodoInput;