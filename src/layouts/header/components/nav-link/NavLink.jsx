import React from 'react';
import './NavLink.sass';

const NavLink = (props) => {
  const link = props.link

  return (
    <div className="nav-link">
      <a href="#" className="nav-link__link">{ link.title }</a>
    </div>
  )
}

export default NavLink