let React = require('react');
let ReactRouter = require('react-router');

let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let NotFoundRoute = ReactRouter.NotFoundRoute; 

let hashHistory = ReactRouter.hashHistory

let Main = require('../components/Main');
let Home = require('../components/Home');
let formFieldsContainer = require('../containers/formFieldsContainer');
let detailsContainer = require('../containers/detailsContainer');
let SpotifyContainer = require('../containers/SpotifySearch');
let ArtistDetail = require('../containers/SpotifyDetail');
let AlbumDetail = require('../containers/SpotifyAlbum');
let NoRoute = require('../containers/NoRoute');
let Form = require('../containers/Form');
 
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />

            <Route path='/form' header='Fill Out Info' component={formFieldsContainer} />
            <Route name="detail" path='/detail' header='Product Detail' component={detailsContainer} />
            <Route name="music" path='/music' header='Spotify Search' component={SpotifyContainer} />
            <Route name="musicDetail" path='/music/artist/:artist' header='Artist Detail' component={ArtistDetail} />
            <Route name="albumDetail" path='/album/:album' header='Album Detail' component={AlbumDetail} />
              <Route name="form" path='/FormTest' header='Trying Fields' component={Form} />
        </Route>
    </Router>
)

module.exports = routes;
