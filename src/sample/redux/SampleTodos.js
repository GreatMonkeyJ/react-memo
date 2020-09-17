import React from 'react';
import { connect } from 'react-redux';

// constant
import { FILTER } from './constant/actionTypes';

// Actions
import * as actions from './actions';
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
            <button type="button" onClick={() => this.props.asyncAddTodo(this.inputRef.value)}>asyncAddTodo</button>
          </div>
          <div>
            Filter :
             {Object.keys(FILTER).map(filter => (<button type="button" key={filter} onClick={() => this.props.filterTodo(filter)}>{JSON.stringify(filter)}</button>))}
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
    asyncAddTodo: text => dispatch(actions.asyncAddTodo(text)),
    removeTodo: id => dispatch(todos.removeTodo(id)),
    toggleTodo: id => dispatch(todos.toggleTodo(id)),
    filterTodo: filter => dispatch(filterTodo(filter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleTodos); // Thunk pattern
