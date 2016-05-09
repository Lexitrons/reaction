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
var SpotifyContainer = require('../containers/SpotifySearch');
var ArtistDetail = require('../containers/SpotifyDetail');
var AlbumDetail = require('../containers/SpotifyAlbum');
var NoRoute = require('../containers/NoRoute');
 
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path='/form' header='Fill Out Info' component={formFieldsContainer} />
            <Route name="detail" path='/detail' header='Product Detail' component={detailsContainer} />
            <Route name="music" path='/music' header='Spotify Search' component={SpotifyContainer} />
            <Route name="musicDetail" path='/music/artist/:artist' header='Artist Detail' component={ArtistDetail} />
            <Route name="albumDetail" path='/album/:album' header='Album Detail' component={AlbumDetail} />
        </Route>
        
    </Router>
)

module.exports = routes;
