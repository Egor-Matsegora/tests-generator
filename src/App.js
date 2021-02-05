import './App.sass';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Create from './pages/create-test/Create';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Profile from './pages/profile/Profile';
import Tests from './pages/tests/Tests';

import { Header } from './layouts/header/Header';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      links: [
        {
          title: 'Главная',
          url: '',
          protect: 'none'
        },
        {
          title: 'Все тесты',
          url: 'tests',
          protect: 'none'
        },
        {
          title: 'Вход',
          url: 'login',
          protect: 'home'
        },
        {
          title: 'Регистрация',
          url: 'registration',
          protect: 'home'
        },
        {
          title: 'Создать тест',
          url: 'create',
          protect: 'login'
        },
        {
          title: 'Мои тесты',
          url: 'tests',
          protect: 'login'
        },
        {
          title: 'Профиль',
          url: 'profile',
          protect: 'login',
        }
      ]
    }
  }

  render() {
    return (
      <div className="page">
        <Router>
          <div className="page__header">
            <Header links={ this.state.links }/>
          </div>
          <div className="page__content">

            <Switch>

              <Route path="/create">
                <Create />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/registration">
                <Registration />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>

              <Route path="/tests">
                <Tests />
              </Route>

              <Route path="/">
                <Home />
              </Route>

            </Switch>

          </div>
          <div className="page__footer">

          </div>
        </Router>
      </div>
    )
  }
}

export default App;
