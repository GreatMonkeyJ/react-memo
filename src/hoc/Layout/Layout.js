import React from 'react';
import { connect } from 'react-redux';

// Containers
import Header from '@containers/Header/Header';
import Footer from '@containers/Footer/Footer';

// Components
import Modal from '@components/UI/Modal/Modal';

// Actions
import { setModalVisible } from '@actions';

class Layout extends React.Component {
  render() {
    const { modalVisible, setModalVisible, children } = this.props;

    return (
      <div id="wrap">
        {/* Header */}
        <Header />
        {/*  //Header */}

        {/* Contents */}
        <div id="contents">
          {children}

          {
            modalVisible &&
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
              Modal
            </Modal>
          }
        </div>
        {/* // Contents */}

        {/* Footer */}
          <Footer />
        {/* // Footer */}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    modalVisible: state.modal.modalVisible
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setModalVisible: (modalVisible) => dispatch(setModalVisible(modalVisible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
