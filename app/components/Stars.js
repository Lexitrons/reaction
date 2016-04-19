var React = require('react');
var PropTypes = React.PropTypes;
 

function Stars (props) {
        var list = [],
        i;

        for ( i=0; i<  props.count; i++) {
            list.push( 
                <li key={i} className="stars__item">
                    <svg className="stars__star" version="1.1" viewBox="0 0 30 30">
                        <path d="M15.4,2.8l3.7,7.5c0.1,0.1,0.2,0.2,0.3,0.3l8.3,1.2c0.4,0.1,0.5,0.5,0.3,0.8l-6,5.9c-0.1,0.1-0.2,0.3-0.1,0.4l1.4,8.3
                    c0.1,0.4-0.3,0.7-0.7,0.5l-7.4-3.9c-0.1-0.1-0.3-0.1-0.4,0l-7.4,3.9c-0.3,0.2-0.7-0.1-0.7-0.5l1.4-8.3c0-0.1,0-0.3-0.1-0.4l-6-5.9
                    c-0.3-0.3-0.1-0.7,0.3-0.8l8.3-1.2c0.1,0,0.3-0.1,0.3-0.3l3.7-7.5C14.8,2.4,15.2,2.4,15.4,2.8z"/>
                    </svg>
                </li>        
            );
        }

    return (
        <div className="rating">
            <h3 className="rating__count"> Rating : {props.count}</h3>   
            <ul className="stars">
                {list}
            </ul>
        </div>
    )
};

Stars.propTypes = {
 
};

module.exports = Stars;