var React = require('react');
var formFields = require('../components/formFields');

var formFieldsContainer = React.createClass({

  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  
  render: function () {
    return (
      <formFields
        header={this.props.route.header}
      />
    )
  }
});

module.exports = formFieldsContainer;