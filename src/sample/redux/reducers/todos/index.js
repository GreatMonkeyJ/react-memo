import * as actionTypes from '../../constant/actionTypes';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case actionTypes.TODO_REMOVE:
      return state.filter(todo => todo.id !== action.id);
    case actionTypes.TODO_TOGGLE:
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed} : todo);
    default:
      return state;
  }
}

export default todosReducer;
