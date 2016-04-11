var React = require('react');
var FormFields = require('../components/formFields');
var Places = require('../components/Places');

var $ = require ('jquery')

var FormFieldsContainer = React.createClass({

  getInitialState: function () {
    console.log("inital")
    return {
      isLoading: true,
      firstname: "",
      lastname: ""
    }
  },

  componentDidMount: function() {
    console.log("mounted")
    this.setState({
      isLoading: true,
      places: ""
    });
  },

  handleChange: function(a) {
    this.setState({
      [a.target.name]: a.target.value
    });

     map = new google.maps.Map(document.getElementById('map'), {

        zoom: 15
    });

    var request = {
        query: this.state.firstname
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, this.callback);
  },

  handleSubmit: function (e) {
    e.preventDefault();

   },
   
   callback: function( response, status ) {
        this.setState({
            places : response
        })
        console.log(this.state.places)
   },
  
  render: function () { 
    return (

      <FormFields
        onSubmit={this.handleSubmit}
        header={this.props.route.header}
        onChange={this.handleChange}
      />

      
    )
  }
});

module.exports = FormFieldsContainer;
 
 // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=YOUR_API_KEY

 