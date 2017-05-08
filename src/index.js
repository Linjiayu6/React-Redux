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
    return <div>{name}</div>;
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Index />, app);
