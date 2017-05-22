/* eslint no-shadow: 0, react/prop-types: 0  */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './framework/store';

import Biztone from './biztone/Container';

const App = ({ store }) =>
  (<Provider store={store}>
    <Biztone />
  </Provider>);

export default App;
