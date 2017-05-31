/* eslint no-shadow: 0, react/prop-types: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './framework/store';

import Biztone from './biztone/Container';
import Reserve from './reserve/index';

import { Router, Route } from 'react-router';

const App = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Reserve} />
      <Route path="biztone" component={Biztone} />
    </Router>
  </Provider>
);

export default App;
