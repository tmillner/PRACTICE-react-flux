'use strict';

// Absolute paths like require('/dist/js/components/App'); fail
// using absolute paths goes against the grain per nodejs.
var App = require('./components/App.js');
var ReactDOM = require('react-dom');
var React = require('react');

// Loading this from src will fail.
// Oridinary browser cant read it
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));