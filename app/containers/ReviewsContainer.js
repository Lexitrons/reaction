var React = require('react');
var Reviews = require('../components/Reviews');

var ReviewsContainer = React.createClass({

  getInitialState: function () {
    return {
      hidden: true,
      toggle: "Show"
    } 

    console.log(this.state)
  },
  componentWillMount:function(){
 
  },

  componentDidMount: function() {
    
  },

  componentWillUpdate:function() {
     
  },

  handleClick: function() {
    var text = this.state.hidden == true ? false : true;
    var tog = this.state.toggle == "Show" ? "Hide" : "Show";
    
    this.setState({
      hidden: text,
      toggle: tog
    })
 
  },
 
  render: function () { 
    return (
      <div>
          <h3 onClick={this.handleClick} className="detail__subtitle">Reviews <span>{this.state.toggle}</span></h3>
          <ul className="detail__reviews">
          { !this.state.hidden && this.props.review.map( function( info, index) {
              return (
                  <Reviews
                    key={index}
                    reviews={info}
                    show={this.state.hidden}
                  />
                )
             }.bind(this))}
        </ul>
      </div>
    )
  }
});

module.exports = ReviewsContainer;

 