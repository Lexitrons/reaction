var React = require('react');
var $ = require('jquery');
 
var AlbumDetail = require('../components/AlbumDetail');
var TrackSingle = require('../components/Tracks');
var RelatedArtists = require('../components/RelatedArtists');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var SpotAlbum = React.createClass({

  getInitialState: function () {
    return {
      album: this.props.params.album,
      // redirect: this.state.location.pathname,
      albuminfo: {},
      trackAudio: [],
      trackinfo: [],
      related: {},
      relatedLoading: false
    } 
  },
  componentWillMount:function(){
 
     $.ajax({
        url: "https://api.spotify.com/v1/albums/"+this.state.album,
        success: function (response) {
            this.setState( {
              albuminfo: response
            } );
        }.bind(this),
        complete: function() {
          this._getTracks();
        }.bind(this)
    }); 
 
  },
  _getTracks: function() {
    
    var trackAudio = this.state.albuminfo.tracks.items.map( function(i,v) {
      return i.id;
    }).join(',') 
    
    var accessToken = "BQDdlQQ0WZFCDN66iGdimX0SuVAKn69gvHGnfvgiBoQqnYEB5290uvw2C3UxahACgF406Fc2cYg9XOyJ6uy1vif4oOf7nJD5rR-U_sPFP4vc1z7dqYFmklaKKfeMeJbzaZVJu2MdcFF3PoU";

    $.ajax({
        url: "https://api.spotify.com/v1/audio-features?ids="+trackAudio ,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {

            this.setState( {
              trackAudio: response.audio_features
            } );
        }.bind(this)
    }); 

     $.ajax({
        url: "https://api.spotify.com/v1/tracks?ids="+trackAudio ,
        success: function (response) {

            this.setState( {
              trackinfo: response.tracks
            } );
        }.bind(this)
      }); 

     $.ajax({
        url: "https://api.spotify.com/v1/artists/"+ this.state.albuminfo.artists[0].id +"/related-artists",
        success: function (response) {
          console.log(response)
            this.setState( {
              related: response,
              relatedLoading: false
            } );
        }.bind(this)
    });
  },

  componentDidMount: function() {
    
  },

  componentWillUpdate:function() {
  },

  render: function () { 
    return (
      <div className="main-content">
        <AlbumDetail
          info={this.state.albuminfo}
        />

        <TrackSingle 
            audio={this.state.trackAudio}
            track={this.state.trackinfo}
          />
        
        <RelatedArtists
            related={this.state.related}
            isLoading={this.state.relatedLoading} 
        />
           
      </div>
      )
 
  }
});

module.exports = SpotAlbum;

 