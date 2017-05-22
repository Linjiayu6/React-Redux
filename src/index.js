import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './framework/store';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App store={store} />, app);
