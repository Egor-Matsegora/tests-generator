import './App.sass';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import routes from './routing/routes';
import BaseRoute from './routing/BaseRoute';

import { Header } from './layouts/header/Header';

class App extends React.Component {

  constructor() {
    super();
    this.state = { routes: routes };
  }

  render() {
    return (
      <div className="page">
        <Router>
          <div className="page__header">
            <Header links={ this.state.routes }/>
          </div>
          <div className="page__content">

            <Switch>

              { this.state.routes.map((route) => (
                <BaseRoute key={ route.title } { ...route } />
              )) }

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
