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

/* eslint no-shadow: 0, react/no-did-mount-set-state: 0, react/prop-types: 0, no-undef: 0 */

import './style.css';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { onHandler } from './redux/action';

import { store } from './redux/store';

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

const { object, func } = PropTypes;
Index.propTypes = {
  poi: object,
  onHandler: func,
};
const IndexComponent = connect(state => state, { onHandler })(Index);

const App = ({ store }) =>
  (<Provider store={store}>
    <IndexComponent />
  </Provider>);

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App store={store} />, app);
