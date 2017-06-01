import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './framework/store';
import browserHistory from 'react-router/lib/browserHistory';
import { syncHistoryWithStore } from 'react-router-redux';

// 将store和history, 在history里面绑定, Router可以使用
const history = syncHistoryWithStore(browserHistory, store);

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
  <App store={store} history={history} />, app);
