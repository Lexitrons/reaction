var React = require('react');
var PropTypes = React.PropTypes;

var PlaceItem = require('../components/PlaceItem');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

function Places (props) {
        
        return (
        	<div className="place-wrap">
                {!!props.header &&<h1 className="place__header">Showing "<span className="result-total">{props.searchResults.length}</span>"result{props.searchResults.length > 1 && "s"} for {props.header}  </h1>}

                <ReactCSSTransitionGroup 
                transitionName={{
                    enter: 'appear',
                    enterActive: 'appear-active',
                    leave: 'leave',
                    leaveActive: 'leave-active',
                    appear: 'appear',
                    appearActive: 'appear-active'
                }}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionAppearTimeout={300}
                transitionLeave={true}
                transitionAppear={true}
                component='ul' 
                className="place">
                    {props.searchResults.map( function( info, index) {
                        return (
                            <PlaceItem 
                                result={info}
                                key={index}
                            />
                        )
                    })}
                	 </ReactCSSTransitionGroup>
            </div>
        )
};

Places.propTypes = {
  header: PropTypes.string.isRequired,
  searchResults: PropTypes.array
  
};



module.exports = Places;