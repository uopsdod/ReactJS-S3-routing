import React from 'react';
import ReactDOM from 'react-dom'
import MyRouting from './App'

console.log(window.location.href)
var pathArray = window.location.href.split('/#/');
var path = pathArray[1]

ReactDOM.render(<MyRouting urlpath={path}/>, document.getElementById('root'));