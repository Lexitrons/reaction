var React = require('react');
var $ = require('jquery');
var ReactRouter = require('react-router');
var ArtistInfo = require('../components/ArtistInfo');
var Albums = require('../components/Albums');
var RelatedArtists = require('../components/RelatedArtists');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var SpotifyDetail = React.createClass({

  getInitialState: function () {
    return {
      artist: "",
      feature: {},
      albums: {},
      related:{},
      artistLoading: true,
      albumsLoading: true,
      relatedLoading: true
    } 
  },
  componentWillMount:function(){
   this.setState({
    artist: this.props.routeParams.artist
   });
    
  },
  
  componentDidMount: function() {
     this._getInfo(this.props.routeParams.artist);
     $(window).scrollTop();
  },
  
  _getInfo:function(i,v ) {
    console.log(i);
    $.ajax({
        url: "https://api.spotify.com/v1/artists/"+ i +"",
        success: function (response) {
             this.setState({
              feature: response,
              artistLoading: false
          });
        }.bind(this)
    }); 

     $.ajax({
        url: "https://api.spotify.com/v1/artists/"+ i +"/albums",
        success: function (response) {
            this.setState( {
              albums: response,
              albumsLoading: false
            } );
        }.bind(this)
    }); 
    
     $.ajax({
        url: "https://api.spotify.com/v1/artists/"+ i +"/related-artists",
        success: function (response) {
            this.setState( {
              related: response,
              relatedLoading: false
            } );
        }.bind(this)
    });
  },
  componentWillUpdate:function(id) {
 
  },
  componentWillReceiveProps: function(i) {

    this.setState({
      artist: i.routeParams.artist,
      artistLoading: true,
      albumsLoading: true,
      relatedLoading: true
    }, this._getInfo(i.routeParams.artist) );
 
  },

  render: function () { 
    return (

    <div className="main-container">
           <ReactCSSTransitionGroup 
                transitionName={{
                    enter: 'appear',
                    enterActive: 'appear-active',
                    leave: 'leave',
                    leaveActive: 'leave-active',
                    appear: 'appear',
                    appearActive: 'appear-active'
                }}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppearTimeout={500}
                transitionLeave={true}
                transitionAppear={true}
                component='div' 
                className="hero-section">
                <div className="artist-detail">
                   <ArtistInfo
                              info={this.state.feature}
                              isLoading={this.state.artistLoading}
                          />

                           
                </div>
       
      </ReactCSSTransitionGroup>
    <ReactCSSTransitionGroup 
                transitionName={{
                    enter: 'appear',
                    enterActive: 'appear-active',
                    leave: 'leave',
                    leaveActive: 'leave-active',
                    appear: 'appear',
                    appearActive: 'appear-active'
                }}
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
                transitionAppearTimeout={200}
                transitionLeave={true}
                transitionAppear={true}
                component='div' 
                className="secondary-content"
                >
                <Albums
                  albums={this.state.albums}
                  isLoading={this.state.albumsLoading}
              />

              <RelatedArtists
                              related={this.state.related}
                              isLoading={this.state.relatedLoading}
                              reRender={this.handleClick}
                          />


              </ReactCSSTransitionGroup>

    </div>
    )
  }
});

module.exports = SpotifyDetail;

 