/*
require('./style.css');
var moment = require('moment');

var generateText = require('./generateText');
var app  = document.createElement('div');
app.innerHTML = '<h1>Time: '+ moment().format() +'</h1>';
app.appendChild(generateText());
document.body.appendChild(app);
*/

import './style.css';
import moment from 'moment';
import generateText from './generateText';
const app  = document.createElement('div');
app.innerHTML = `<h1>Time: ${moment().format()}</h1>`;
app.appendChild(generateText());
document.body.appendChild(app);
