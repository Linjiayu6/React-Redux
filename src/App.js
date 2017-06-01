/* eslint no-shadow: 0, react/prop-types: 0, import/no-unresolved: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './framework/store';

import { Router, Route } from 'react-router';
import routes from './routes';

const App = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      {routes()}
    </Router>
  </Provider>
);

export default App;
