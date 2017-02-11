var BASE = "TODO_CONSTANTS";

function construct(value) {
	return BASE + "_" + value;
}

module.exports = {
	INPUT_TODO_ITEM: construct("INPUT_TODO_ITEM"),
	MARK_AS_DONE: construct("MARK_AS_DONE")
};