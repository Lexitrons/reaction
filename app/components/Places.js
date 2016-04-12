var React = require('react');
var PropTypes = React.PropTypes;

var PlaceItem = require('../components/PlaceItem');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

function Places (props) {
 
        return (
        	<div className="place-wrap">
                <h1 className="form-header">{props.header}</h1>
                <ul className="places">
                <ReactCSSTransitionGroup 
                transitionName={{
                    enter: 'appear',
                    enterActive: 'appear-active',
                    leave: 'leave',
                    leaveActive: 'leave-active',
                    appear: 'appear',
                    appearActive: 'appear-active'
                }}
                transitionEnterTimeout={3000}
                transitionLeaveTimeout={3000}
                transitionAppearTimeot={3000}
                transitionLeave={true}
                transitionAppear={true}
                component='ul' 
                className="places">
                    {props.searchResults.map( function( info, index) {
                        return (
                            <PlaceItem 
                                result={info}
                                key={index}
                            />
                        )
                    })}
                	 </ReactCSSTransitionGroup>
                </ul>
               
            </div>
        )
};

Places.propTypes = {
  header: PropTypes.string.isRequired,
  searchResults: PropTypes.array
  
};



module.exports = Places;