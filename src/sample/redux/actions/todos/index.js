import * as actionTypes from '../../constant/actionTypes';

let tempID = 0;

export const addTodo = text => {
  return {
    type: actionTypes.TODO_ADD,
    id: tempID++,
    text
  }
};

export const removeTodo = id => {
  return {
    type: actionTypes.TODO_REMOVE,
    id
  }
};

export const toggleTodo = id => {
  return {
    type: actionTypes.TODO_TOGGLE,
    id
  }
};
