var React = require('react');
var $ = require('jquery');
var SpotForm = require('../components/SpotForm');
var SpotResults = require('../components/SpotResults');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var SpotifyContainer = React.createClass({

  getInitialState: function () {
    return {
      search: "",
      feature: "",
      results: []
    } 
  },
  componentWillMount:function(){
 
  },

  componentDidMount: function() {
    
  },
  
  handleChange: function(e) {
    this.setState({
      search: e.target.value
    });
  },
  
  handleClick: function(e,i,b,c) {
      e.preventDefault();
 
  },
  
  handleSubmit: function (e) {
    e.preventDefault();
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: this.state.search,
            type: 'artist'
        },
        success: function (response) {
            this.setResults( response );
        }.bind(this)
    }); 
   },
   setResults: function( data) {
      this.setState({
          results: data.artists.items
      });
   },

  componentWillUpdate:function() {
     
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
        <SpotForm 
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
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
                <ul className="arist-list">
              
              {this.state.results.map( function( info, index) {
                        return (
                            <SpotResults
                                results={info}
                                key={index}
                                click={this.handleClick}
                            />
                        )
                    }.bind(this))}

            
        </ul>
      </ReactCSSTransitionGroup>
      </div>
      )
 
  }
});

module.exports = SpotifyContainer;

 