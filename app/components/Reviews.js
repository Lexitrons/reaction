var React = require('react');
var PropTypes = React.PropTypes;

function Reviews (props) {
    console.log(props )
    return  (
        <li className="review">
            <div className="review__wrap">
                <h4 className="review__author">{props.reviews.author_name}</h4>
                <p className="review__desc">{props.reviews.text}</p>
            </div>
         </li>
    )
}

Reviews.propTypes = {
  
};

module.exports = Reviews;