import * as actionTypes from '../../constant/actionTypes';

const filterReducer = (state = actionTypes.FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.TODO_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filterReducer;
