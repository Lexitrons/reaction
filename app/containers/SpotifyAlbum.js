var React = require('react');
var $ = require('jquery');
 
var AlbumDetail = require('../components/AlbumDetail');
var TrackSingle = require('../components/Tracks');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var SpotAlbum = React.createClass({

  getInitialState: function () {
    return {
      album: this.props.params.album,
      albuminfo: {},
      trackAudio: [],
      trackinfo: []
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
          this.getTracks();
        }.bind(this)
    }); 
  },
  getTracks: function() {
    
    var trackAudio = this.state.albuminfo.tracks.items.map( function(i,v) {
      return i.id;
    }).join(',') 
    
    var accessToken = "BQAfmdBBE0oJFGrmIjhVuxZFwS0FSQvJmsX2gO63RJ8u-c7h2oX-pUeDDYROo_CVh2oWG8vnCRTNq-ODibkKrcYUK981jwDxvSLETYwMCOD6ZBpaMPdx0_IfGDfKaQsae4Ne4FHLPc2r1XA";
    
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
  },

  componentDidMount: function() {
  
  },
  
  handleChange: function(e) {
 
  },
  
  handleClick: function(e,i,b,c) {
 
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
      </div>
      )
 
  }
});

module.exports = SpotAlbum;

 