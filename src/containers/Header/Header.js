import React from 'react';
import { connect } from 'react-redux';

// Components
import GNB from '@components/GNB/GNB';

// Style
import './Header.scss';

// Actions
import { setModalVisible } from '@actions';

class Header extends React.Component {
  render() {
    const { categories, setModalVisible } = this.props;

    return (
      <div id="header">
        <GNB categories={categories} setModalVisible={setModalVisible} />
      </div>
    );
  }
}

Header.defaultProps = {
  categories: [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'About',
      to: '/about'
    }
  ]
}

export default connect(null, { setModalVisible })(Header);
