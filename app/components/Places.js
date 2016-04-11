var React = require('react');
var PropTypes = React.PropTypes;

function Places (props) {
	console.log( props );

    return 
    	<div className="place-wrap">
            <h1 className="form-header">{props.header}</h1>
            <ul className="places">
            	<li className="place__item"></li>
            </ul>
        </div>

};

Places.propTypes = {
  header: PropTypes.string.isRequired,
  
};

module.exports = Places;