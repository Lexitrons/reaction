var React = require('react');
var PropTypes = React.PropTypes;

var PlaceItem = require('../components/PlaceItem');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

function Places (props) {
        
        return (
        	<div className="place-wrap">
                { props.error !== "" && 
                        <p className="place__error">{props.error}</p>
                    }

                    { props.header &&
                        <p className="place__result">
                        "<span className="places__result-total">{props.total}</span>"
                        result{props.total > 1 && "s"} for {props.header} </p>

                    }

                <ReactCSSTransitionGroup 
                transitionName={{
                    enter: 'appear',
                    enterActive: 'appear-active',
                    leave: 'leave',
                    leaveActive: 'leave-active',
                    appear: 'appear',
                    appearActive: 'appear-active'
                }}
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}
                transitionAppearTimeout={700}
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
  searchResults: PropTypes.array
  
};



module.exports = Places;