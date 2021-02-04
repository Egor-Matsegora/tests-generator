import React from 'react';
import NavLink from './components/nav-link/NavLink';
import Burger from './components/burger/Burger';
import './Header.sass';

export class Header extends React.Component {
  links = [
    // {
    //   title: 'Главная',
    //   url: '',
    //   protect: 'none'
    // },
    {
      title: 'Все тесты',
      url: '/',
      protect: 'none'
    },
    {
      title: 'Вход',
      url: '/',
      protect: 'home'
    },
    {
      title: 'Регистрация',
      url: '/',
      protect: 'home'
    },
    {
      title: 'Создать тест',
      url: '/',
      protect: 'login'
    },
    {
      title: 'Мои тесты',
      url: '/',
      protect: 'login'
    },
    {
      title: 'Профиль',
      url: '/',
      protect: 'login'
    }
  ]

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="header">
        <div className="header__logo">

        </div>

        <nav className="header__nav">
          { this.links.map((link, index) => (
            <NavLink link={link} key={ `${index}` } />
          )) }
        </nav>

        <div className="header__burger">
          <Burger links={ this.links } />
        </div>
      </div>
    )
  }
}