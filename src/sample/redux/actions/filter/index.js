import * as actionTypes from '../../constant/actionTypes';

export const filterTodo = (filter) => {
  return {
    type: actionTypes.TODO_FILTER,
    filter
  }
};
