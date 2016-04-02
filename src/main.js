"use strict"
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var ReactDOM = require('react-dom');
var Route = ReactRouter.Route;

var hashHistory = ReactRouter.hashHistory;

/*ReactDom.render(routes, function (Handler) {
	ReactDom.render(<Handler/>, document.getElementById('app'));
});
*/


ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)



