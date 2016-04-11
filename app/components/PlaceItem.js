var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

function PlaceItem (props) {
	console.log( props );
        
        return (
            <li className="place__item">
            {props.result.name}
                <br />
            {props.result.formatted_address}
            <br/>
        {props.result.id}
             <br/>
            <Link to={{ pathname: 'detail',  query: { place:  props.result.place_id } }} >
              <button type='button' className='home-hero__button'>View Details</button>
            </Link>
            </li>
        )
 
};

PlaceItem.propTypes = {
  // header: PropTypes.string.isRequired,
  
};

module.exports = PlaceItem;