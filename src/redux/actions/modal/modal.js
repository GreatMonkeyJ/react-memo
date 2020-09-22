import { MODAL_VISIBILITY } from '@constants';

export const setModalVisible = (modalVisible) => {
  return {
    type: MODAL_VISIBILITY,
    modalVisible
  }
}
