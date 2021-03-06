import React from 'react';
import HeaderNavLink from './components/header-nav-link/HeaderNavLink';
import Burger from './components/burger/Burger';
import './Header.sass';

export class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header__logo">

        </div>

        <nav className="header__nav">
          { this.props.links.reverse().map((link, index) => (
            <HeaderNavLink link={link} key={ `${index}` } />
          )) }
        </nav>

        <div className="header__burger">
          <Burger links={ this.props.links } />
        </div>
      </div>
    )
  }
}