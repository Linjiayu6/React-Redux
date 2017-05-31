/* eslint no-shadow: 0, react/prop-types: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './framework/store';

import Biztone from './biztone/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = ({ store }) =>
  (<Provider store={store}>
    <Router>
      <Route path="/" component={Biztone} />
    </Router>
  </Provider>);

export default App;
