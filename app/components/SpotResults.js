var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
 
var Link = ReactRouter.Link;

function SpotResults (props) {
    console.log(props);

    return !props.results 
        ? <p>Enter Search</p>
        : <li key={props.key} className="artist">
          
          <Link  to={{ pathname: 'musicDetail',  query: { artist:  props.results.id} }}  className="artist__link">{props.results.images.length > 0 && <img src={props.results.images[0].url} alt=""/> }
          {props.results.name}
          
          <ul className="artist-genres">
            {props.results.genres.map(function(info, index) {
                return( 
                    <li key={index} className="artist-genres__item">
                        {info}
                    </li>
                )
            })}

        </ul>
          </Link>
        </li>

};

SpotResults.propTypes = {
  results: PropTypes.object.isRequired
};

module.exports = SpotResults;