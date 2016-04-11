var React = require('react');
var PropTypes = React.PropTypes;

var PlaceItem = require('../components/PlaceItem');

function Places (props) {
 
        return (
        	<div className="place-wrap">
                <h1 className="form-header">{props.header}</h1>
                <ul className="places">
                    {props.searchResults.map( function( info, index) {
                        return (
                            <PlaceItem 
                                result={info}
                                key={index}
                            />
                        )
                    })}
                	 
                </ul>
               
            </div>
        )
};

Places.propTypes = {
  header: PropTypes.string.isRequired,
  
};

module.exports = Places;