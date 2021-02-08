import React from 'react';
import './HeaderNavLink.sass';
import { NavLink } from 'react-router-dom';

const HeaderNavLink = (props) => {
  const link = props.link

  return (
    <div className="nav-link">
      <NavLink
        to={ link.path }
        className="nav-link__link"
        activeClassName="nav-link__link--active"
        exact
      >{ link.title }</NavLink>
    </div>
  )
}

export default HeaderNavLink