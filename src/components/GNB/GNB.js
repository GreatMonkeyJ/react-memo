import React from 'react';
import PropTypes from 'prop-types';

// Components
import Links from '@components/UI/Links/Links';
import Buttons from '@components/UI/Buttons/Buttons';

// Style
import './GNB.scss';

const GNB = props => {
  const { categories, setModalVisible } = props;
  return (
    <div id="GNB">
      {
        categories.map((category, i) => {
          return (
            <Links
              key={category.name}
              isNavLink={true}
              to={category.to}
              exact={(i === 0 ? true : false)}
            >
              {category.name}
            </Links>
          )
        })
      }
      <Buttons type="button" className="success" onClick={() => setModalVisible(true)}>SignUp</Buttons>
    </div>
  );
}

GNB.propTypes = {
  categories: PropTypes.array.isRequired,
  setModalVisible: PropTypes.func.isRequired
}

export default GNB;