var React = require('react');
var FormFields = require('../components/formFields');
var Places = require('../components/Places');

var FormFieldsContainer = React.createClass({

  getInitialState: function () {
    console.log("inital")
    return {
      isLoading: true,
      firstname: "",
      search: "",
      places: []
    }
  },

  componentDidMount: function() {
     map = new google.maps.Map( document.getElementById('map'), {
        zoom: 15
    });

    this.setState({
      isLoading: false,
    });
  },

  handleChange: function(a) {
    
    this.setState({
      [a.target.name]: a.target.value
    });
    var map = new google.maps.places.AutocompleteService();
        
    map.getQueryPredictions({ input: a.target.value }, this.callback);

  } ,
    handleSubmit: function (e) {
        e.preventDefault();
        request = {
            query: this.state.search
        };

        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, this.callback);
   },
   
   callback: function( response, status ) {
        this.setState({
            places : response
        })
   },
  
  render: function () { 
    return (
      <div>

      <FormFields
        onSubmit={this.handleSubmit}
        header={this.props.route.header}
        onChange={this.handleChange}
      />

      <Places 
        header={"Places Header"}
        searchResults={this.state.places}
      />

      </div>
    )
  }
});

module.exports = FormFieldsContainer;
 
 // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=YOUR_API_KEY

 