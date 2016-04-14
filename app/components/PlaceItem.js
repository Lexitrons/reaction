var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
 
var Link = ReactRouter.Link;

function PlaceItem (props) {
	console.log( props );
        
        return (
            <li key={props.key} className="place__item">
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
            
                <div className="place__subinfo">
                
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ipsum, iusto quam, eaque optio eveniet incidunt neque dolores iste eum voluptate et libero aliquam eligendi, veritatis explicabo hic nihil deserunt.</p>
                    <Link className="place__button" 
                        to={{ pathname: 'detail',  query: { place:  props.result.place_id } }} >
                        View Details 
                    </Link>
                </div>
            </li>
          
        )
 
};

PlaceItem.propTypes = {
  result: PropTypes.object.isRequired
  
};

module.exports = PlaceItem;