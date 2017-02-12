jest.mock('../../actions/TodoActions');

var React = require('react');
var { shallow, mount } = require('enzyme');

var TodoItem = require('../../components/TodoItem.jsx');

var TodoActions = require('../../actions/TodoActions');

describe('<TodoItem />', () => {

  var todo;

  beforeEach(() => {
    todo = {
      content: "content",
      priority: "high",
      done: false
    };
  });
  
  it('renders not done todo item', () => {
    const wrapper = shallow(<TodoItem  todo={todo} />);

    expect(wrapper.find('li button').html()).toContain('<button class="is-done">');  
    expect(wrapper.find('li span').html()).toContain('<span class="level high">H</span>');
  });

  it('renders done todo item', () => {
    todo.done = true;
    const wrapper = shallow(<TodoItem  todo={todo} />);

    expect(wrapper.html()).toContain('<li class="done">');  
    expect(wrapper.html()).toContain('content');  
    expect(wrapper.find('li span').html()).toContain('<span class="level high">H</span>');
  });

  it('renders not done todo item and click done', () => {
    const wrapper = shallow(<TodoItem  todo={todo} />);
    const button = wrapper.find('li button');

    button.simulate('click');

    expect(TodoActions.markAsDone).toBeCalledWith("content");
  });
  
});