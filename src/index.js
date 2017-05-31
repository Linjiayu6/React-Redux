import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './framework/store';

const app = document.createElement('div');
document.body.appendChild(app);

import browserHistory from 'react-router/lib/browserHistory';
import { syncHistoryWithStore } from 'react-router-redux';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <App store={store} history={history} />, app);
