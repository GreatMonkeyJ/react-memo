import { combineReducers } from 'redux';

// TODOS
import todosReducer from './todos';

// FILTERS
import filterReducer from './filter';

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

export default reducer;
