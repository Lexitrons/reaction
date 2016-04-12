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
      places: [],
      inputError : ""
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
  },

    handleSubmit: function (e) {
        e.preventDefault();
        
    if(this.state.search === "") {
        this.setState({
            errorMessage : "Please Fill Out the Field"
        })
    } else {

      this.handleClear()

      request = {
          query: this.state.search
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, this.callback);
    }
        
   },

   handleClear: function() {
      this.setState({
        places : []  
      })
   },

   
   callback: function( response, status ) {
        this.setState({
            places : response,
            isLoading: false,
            errorMessage: ""
        })
   },
  
  render: function () { 
    return (
      <div>
        <div className="left-column">
        <FormFields
        onSubmit={this.handleSubmit}
        header={this.props.route.header}
        onChange={this.handleChange}
        clear={this.handleClear}
        error={this.state.errorMessage}
      />
      </div>
      
    <div className="right-column">
        <Places 
            header={"Places Header"}
            searchResults={this.state.places}
        />
        </div>
      </div>
    )
  }
});

module.exports = FormFieldsContainer;
 