/*
1. [CommonJS]
require('./style.css');
var moment = require('moment');

var generateText = require('./generateText');
var app  = document.createElement('div');
app.innerHTML = '<h1>Time: '+ moment().format() +'</h1>';
app.appendChild(generateText());
document.body.appendChild(app);
*/

/*
2. [es6]
import './style.css';
import moment from 'moment';
import generateText from './generateText';
const app  = document.createElement('div');
app.innerHTML = `<h1>Time: ${moment().format()}</h1>`;
app.appendChild(generateText());
document.body.appendChild(app);
*/

import './style.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { onHandler } from './redux/action';

class Index extends Component {
  constructor(...args) {
    super(...args);
    this.state = { name: 'Lin. JY' };
  }

  componentDidMount() {
    this.setState({ name: 'Lucky' });
  }

  render() {
    const { name } = this.state;
    const { poiId, poiName } = this.props.poi;
    return (
      <div>
        <div>Yes: {name}</div>
        <h3>poiId: {poiId}, poiName: {poiName}</h3>
        <button onClick={() => this.props.onHandler()}>Change</button>
      </div>
    );
  }
}

const IndexComponent = connect(state => state, { onHandler })(Index);

import { store } from './redux/store';
const App = ({ store }) =>
  <Provider store={store}>
    <IndexComponent />
  </Provider>;

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App store={store}/>, app);
