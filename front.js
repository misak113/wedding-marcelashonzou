
var React = require('react');
var WelcomePage = require('./dist/js/Homepage/WelcomePage').default;

React.render(
	React.createElement(WelcomePage),
	document.getElementById('app')
);
