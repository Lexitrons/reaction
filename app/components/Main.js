var React = require('react');

var Main = React.createClass({
    getInitialState:function(){
        return {
            loading: true
        }
    },
  render:function(){
    return (
        <div className="main-container">
            {this.props.children}
        </div>
    )
  }
});


module.exports = Main;