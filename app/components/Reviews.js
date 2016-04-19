var React = require('react');
var PropTypes = React.PropTypes;
var Stars  = require('../components/Stars');

function Reviews (props) {
    return  (
        <li className="review">
            <div className="review__wrap">
                
                <div className="review__heading">
                    {props.reviews.profile_photo_url &&
                        <img className="review__image" src={props.reviews.profile_photo_url} alt="{props.reviews.author_name}"/>
                    }
                    <div className="review__heading-content">
                        <h4 className="review__author"> {props.reviews.author_name}</h4>
                        <Stars count={props.reviews.rating} />
                    </div>
                </div>
                
                
                <p className="review__desc">{props.reviews.text}</p>
            </div>
         </li>
    )
}

Reviews.propTypes = {
  
};

module.exports = Reviews;