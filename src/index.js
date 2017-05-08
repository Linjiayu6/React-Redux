require('./style.css');
var generateText = require('./generateText');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World1111</h1>';
app.appendChild(generateText());
document.body.appendChild(app);
