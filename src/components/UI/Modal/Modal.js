import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// HOC
import Portal from '@hoc/Portal/Portal';

// Components
import Buttons from '@components/UI/Buttons/Buttons';

// Style
import './Modal.scss';

const Modal = props => {
  const { modalVisible, setModalVisible, children } = props;

  useEffect(() => {
    document.body.setAttribute('style', 'overflow: hidden; position:fixed;');

    return () => {
      document.body.removeAttribute('style');
    }
  }, [modalVisible]);

  return (
    <Portal elementId="modal-root">
      <div className={'modal' + (modalVisible ? ' active' : '')}>
        <div className="inner">
          <Buttons type="button" className="modalClose" onClick={() => setModalVisible(false)}>X</Buttons>
          {children}
        </div>

        <div className="dimmed" onClick={() => setModalVisible(false)}></div>
      </div>
    </Portal>
  );
}

Modal.propTypes = {
  modalVisible: PropTypes.bool
}

export default React.memo(Modal, (prevProps, nextProps) => {
  return prevProps.modalVisible === nextProps.modalVisible;
});
