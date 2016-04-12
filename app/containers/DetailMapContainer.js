var React = require('react');
var DetailMap = require('../components/DetailMap');

var DetailMapContainer = React.createClass({

  getInitialState: function () {
    return {
      isLoading: true,
      lat: "",
      lng:""
    }
  },
  componentWillMount:function(){
 
  },
  componentDidMount: function() {
 
    map = new google.maps.Map( document.getElementById('detail-map__map'), {
           
          zoom: 15
    })

  },
  componentWillUpdate:function() {
     
  },
 
  render: function () { 
    return (
     <DetailMap 
     />
    )
  }
});

module.exports = DetailMapContainer;

 