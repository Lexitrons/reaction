var React = require('react');
var $ = require('jquery');
 
var AlbumDetail = require('../components/AlbumDetail');
var TrackSingle = require('../components/Tracks');
var RelatedArtists = require('../components/RelatedArtists');
var Back = require('../components/Back');
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
    
    var accessToken = "BQDFSaicQgIMRTT6_3ZEN0j1vQqqEDZT-o6HecBQZrDbF9IWlvDy377BdzV7Xw1LGhxLOxBqp4pI9uxkIbVePDSSZap4m4V84fV1mc8wLfZ5XsCYgPkxXGsec6JLuFQ8F4KO-sBAwhJg_Wc";

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
        <Back />
      </div>
      )
 
  }
});

module.exports = SpotAlbum;

 