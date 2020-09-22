import { MODAL_VISIBILITY } from '@constants';

const inititalState = {
  modalVisible: false
}

const modalReducer = (state = inititalState, action) => {
  switch (action.type) {
    case MODAL_VISIBILITY:
      return {
        modalVisible: action.modalVisible
      };
    default:
      return state;
  }
}

export default modalReducer;
