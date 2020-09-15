import React from 'react';
import { connect } from 'react-redux';

// constant
import { FILTER } from './constant/actionTypes';

// Actions
import * as todos from './actions/todos';
import { filterTodo } from './actions/filter';

const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li onClick={() => toggleTodo(todo.id)}>
      <div style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
      </div>
      <button type="button" onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  )
}

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (<Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}></Todo>))}
    </ul>
  )
}

class SampleTodos extends React.Component {
  inputRef = null;

  render() {
    return (
      <div>
        <h3>Redux</h3>
        <div>
          <h4>Todos</h4>
          <div>
            AddTodo :
            <input type="text" ref={node => this.inputRef = node} placeholder="type Todo" />
            <button type="button" onClick={() => this.props.addTodo(this.inputRef.value)}>addTodo</button>
          </div>
          <div>
            Filter :
            <button type="button" onClick={() => this.props.filterTodo(FILTER.SHOW_ALL)}>All</button>
            <button type="button" onClick={() => this.props.filterTodo(FILTER.SHOW_ACTIVE)}>Active</button>
            <button type="button" onClick={() => this.props.filterTodo(FILTER.SHOW_COMPLETED)}>Completed</button>
          </div>
          <div>
            TodoList :
            <TodoList {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const filteredTodo = (todos, filter) => {
  switch (filter) {
    case FILTER.SHOW_ALL:
      return todos
    case FILTER.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case FILTER.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: filteredTodo(state.todos, state.filter),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(todos.addTodo(text)),
    removeTodo: id => dispatch(todos.removeTodo(id)),
    toggleTodo: id => dispatch(todos.toggleTodo(id)),
    filterTodo: filter => dispatch(filterTodo(filter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleTodos); // Thunk pattern
