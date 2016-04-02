"use strict"

var React = require('react');

var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
	<Route path="/" component={require('./components/app')}>
	  <IndexRoute component={require('./components/homePage')} />
	  <Route name = "authors" path="authors" component={require('./components/authors/authorPage')} />
	  <Route name = "about" path="about" component={require('./components/about/aboutPage')} />
	  <Redirect from = "about-us" to = "about" />
	  <Redirect from = "awthors" to = "authors" />
	  <Redirect from = "about/*" to = "about" />
	  <Route path="*"  component = {require('./components/notFoundPage')} />
	</Route>
	);

module.exports = routes;