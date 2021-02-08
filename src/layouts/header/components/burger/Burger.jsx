import React from 'react';
import { NavLink } from 'react-router-dom';
import './Burger.sass';

export default class Burger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.toggleMenuState = this.toggleMenuState.bind(this)
    this.closeMenuOnResize = this.closeMenuOnResize.bind(this)
  }

  toggleMenuState() {
    this.setState((state, props) => ({
      isMenuOpen: !state.isMenuOpen
    }))
    this.state.isMenuOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'visible');
  }

  preventClick(e) {
    e.stopPropagation()
  }

  closeMenuOnResize() {
    window.innerWidth >= 991 && this.setState({isMenuOpen: false})
  }

  componentDidMount() {
    window.addEventListener('resize', this.closeMenuOnResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.closeMenuOnResize)
  }

  render() {
    return (
      <div className="burger">
        <div
          className={
            this.state.isMenuOpen
              ? 'burger__btn burger__btn--close'
              : 'burger__btn' }
          onClick={ this.toggleMenuState }
        >
          <span className="burger__line burger__line--top"></span>
          <span className="burger__line burger__line--center burger__line--to-right"></span>
          <span className="burger__line burger__line--center burger__line--to-left"></span>
          <span className="burger__line burger__line--bottom"></span>
        </div>
        <div className={
          this.state.isMenuOpen
            ? 'burger__obfuscator'
            : 'burger__obfuscator burger__obfuscator--closed'
          }
          onClick={ this.toggleMenuState }
        >
          <div
            className="burger__menu"
            onClick={ this.preventClick }
          >
            <ul className="burger__links-list">
              { this.props.links.map((link, index) => (
                <li className="burger__link-item" key={ `${index}` }>
                  <NavLink
                    to={ link.path }
                    className="burger__link"
                    activeClassName="burger__link--active"
                    exact={ link.path === '' }
                  >
                    { link.title }
                  </NavLink>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </div>
    )
  }

};
