import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import './Links.scss';

const Links = props => {
  const { isNavLink, to, exact, children, onClick} = props;

  return (
    <>
      {!!isNavLink
        ? <NavLink className="navLink" exact={exact} to={to} onClick={onClick}>{children}</NavLink>
        : <Link classname="link" to={to}>{children}</Link>
      }
    </>
  );
}

Links.propTypes = {
  isNavLink: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

export default Links;
