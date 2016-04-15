var React = require('react');
var FormFields = require('../components/formFields');
var FormDesc = require('../components/FormDesc');
var Places = require('../components/Places');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var FormFieldsContainer = React.createClass({

  getInitialState: function () {
    console.log("inital")
    return {
      isLoading: true,
      firstname: "",
      search: "",
      places: [],
      errorMessage : "",
      title: "",
      length: ""
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
        places : [],
        title: "" 
      })
   },
   callback: function( response, status ) {
        this.setState({
            places : response,
            isLoading: false,
            errorMessage: "",
            title: this.state.search,
            total: response.length
        })
   },
 
  
  render: function () { 
    return (
      <div className="main-inner">
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
                className="left-column">
        <FormDesc

        />
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
                className="right-column"
                >
    <FormFields
        onSubmit={this.handleSubmit}
        header={this.state.title}
        onChange={this.handleChange}
        clear={this.handleClear}
        
       
      />
        <Places 
            header={this.state.title}
            searchResults={this.state.places}
            error={this.state.errorMessage} 
            total={this.state.total}
        />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

module.exports = FormFieldsContainer;
 