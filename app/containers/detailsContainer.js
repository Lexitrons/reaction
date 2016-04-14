var React = require('react');
var DetailInfo = require('../components/Detail');

var DetailMap = require('../components/DetailMap');

var DetailsContainer = React.createClass({

  getInitialState: function () {
    return {
      isLoading: true,
      placeID: this.props.location.query.place,
      details:{},
      lng: "",
      lat: ""
    }
  },
  componentWillMount:function(){
      
  },
  componentDidMount: function() {
     
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

    console.log( response )
    typeof response.photos != "undefined" 
    ? photos =  this.getPhotos( response.photos )
    : photos = ""
    
     if (status == google.maps.places.PlacesServiceStatus.OK) {
        var lat = response.geometry.location.lat;
        var lng = response.geometry.location.lng;
        
        this.setState({
          details: response,
          isLoading: false,
          imageUrl: photos,
          lat: lat,
          lng: lng
        });

          

        
        mapView = new google.maps.Map( document.getElementById('detail-map__map'), {
          center:  response.geometry.location,
          zoom: 15
        })

        var marker = new google.maps.Marker({
                map: mapView,
                position: response.geometry.location
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
      <div className="main-inner">
      <div class="left-column">
         <DetailInfo 
            info={this.state.details}
            isLoading={this.state.isLoading}
            image={this.state.imageUrl}
         />
        </div>

        <div className="right-column">
        <DetailMap
            
        />
         </div>
     </div>
    )
  }
});

module.exports = DetailsContainer;

 