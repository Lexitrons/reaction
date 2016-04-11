var React = require('react');
var DetailInfo = require('../components/Detail');

var DetailsContainer = React.createClass({

  getInitialState: function () {
    console.log("inital")
    return {
      isLoading: true,
      placeID: this.props.location.query.place,
      details:{}
    }
  },
  componentWillMount:function(){
      
  },
  componentDidMount: function() {
    console.log("mounted")
    console.log( this.state.placeID )
     
    map = new google.maps.Map( document.getElementById('map'), {
            zoom: 15
        });
    
    request = {
        placeId: this.state.placeID
    };

      service = new google.maps.places.PlacesService(map);
      service.getDetails(request, this.callback);

  },
  callback: function( response, status) {
    var photos;
    // Check if Google Has Photos
    typeof response.photos != "undefined" 
    ? photos =  this.getPhotos( response.photos )
    : photos = ""
    
     if (status == google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          details: response,
          isLoading: false,
          imageUrl: photos
        });

    }
  },

  getPhotos: function( photo ) {
    var photoArr = {};
 
    for ( i=0 ; i < photo.length; i++) {
        var url = photo[i].getUrl({ 'maxWidth': 800})
        photoArr[i] = {url: url}  
    }
    return photoArr;
  },

  render: function () { 
    return (
     <DetailInfo 
        info={this.state.details}
        isLoading={this.state.isLoading}
        image={this.state.imageUrl}
     />
    )
  }
});

module.exports = DetailsContainer;

 