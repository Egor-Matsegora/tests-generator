import React from 'react';
import './Burger.sass';

export class Burger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  toggleMenuState() {
    this.setState((state, props) => ({
      isMenuOpen: !state.isMenuOpen
    }))
  }

  render() {
    return (
      <div className="burger">
        <div className={ this.state.isMenuOpen ? 'burger__btn burger__btn--close' : 'burger__btn' } onClick={ this.toggleMenuState.bind(this) }>
          <span className="burger__line burger__line--top"></span>
          <span className="burger__line burger__line--center burger__line--to-right"></span>
          <span className="burger__line burger__line--center burger__line--to-left"></span>
          <span className="burger__line burger__line--bottom"></span>
        </div>
        <div className={ this.state.isMenuOpen ? 'burger__menu burger__menu--open' : 'burger__menu burger__menu--closed' }>
          <ul className="burger__links-list">
            { this.props.links.map((link, index) => (
              <li className="burger__link-item" key={ `${index}` }>
                <a href={ link.url } className="burger__link">
                  { link.title }
                </a>
              </li>
            )) }
          </ul>
        </div>
      </div>
    )
  }

};

export default Burger;