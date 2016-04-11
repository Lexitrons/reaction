var React = require('react');
var Places = require('../components/Places');

var PlacesContainer = React.createClass({

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

  render: function () { 
    return (
      <Places 
        header={Places Rendered}
      />
    )
  }
});

module.exports = PlacesContainer;

 