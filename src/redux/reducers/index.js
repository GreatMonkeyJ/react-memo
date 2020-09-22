import { combineReducers } from 'redux';

// Reducers
import modalReducer from './modal/modal';

const reducer = combineReducers({
  modal: modalReducer
});

export default reducer;