var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var hashHistory = ReactRouter.hashHistory

var Main = require('../components/Main');
var Home = require('../components/Home');
var formFieldsContainer = require('../containers/formFieldsContainer');
 

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path='/form' header='Fill Out Info' component={formFieldsContainer} />
        </Route>
    </Router>
)

module.exports = routes;