var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute; 

var hashHistory = ReactRouter.hashHistory

var Main = require('../components/Main');
var Home = require('../components/Home');
var formFieldsContainer = require('../containers/formFieldsContainer');
var detailsContainer = require('../containers/detailsContainer');
var NoRoute = require('../containers/NoRoute');
 
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path='/form' header='Fill Out Info' component={formFieldsContainer} />
            <Route name="detail" path='/detail' header='Product Detail' component={detailsContainer} />
            
        </Route>
        
    </Router>
)

module.exports = routes;
