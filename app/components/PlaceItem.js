var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
 
var Link = ReactRouter.Link;

function PlaceItem (props) {
        return (
            <li key={props.key} className="place__item">
                <Link className="place__link" 
                        to={{ pathname: 'detail',  query: { place:  props.result.place_id } }} >
                    
                    <div className="place__main-info">
                       
                        <figure className="place__figure">
                            <img src={props.result.icon} alt="" className="place__icon"/>
                        </figure>
                        
                        <div className="place__info">
                            <h3 className="place__title">
                                {props.result.name}
                            </h3>
                            <p className="place__address">
                                {props.result.formatted_address}
                            </p>
                        </div>
                    
                    </div>
                </Link>
            </li>
          
        )
 
};

PlaceItem.propTypes = {
  result: PropTypes.object.isRequired
  
};

module.exports = PlaceItem;