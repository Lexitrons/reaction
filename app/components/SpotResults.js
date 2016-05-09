var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
 
var Link = ReactRouter.Link;

function SpotResults (props) {
    return !props.results 
        ? <p>Enter Search</p>
        : <li key={props.key} className="artist">
          
          <Link  to={{ pathname: '/music/artist/' + props.results.id }}  className="artist__link">
              <div className="artist__img-wrap">
                  {props.results.images.length > 0 && <img className="artist__img" src={props.results.images[0].url} alt=""/> }
              </div>
            <div className="artist__info">
                <h3 className="artist__name">
                    {props.results.name}
                </h3>
                
                          
                <ul className="artist-genres">
                    {props.results.genres.map(function(info, index) {
                        return( 
                            <li key={index} className="artist-genres__item">
                                {info}
                        </li>
                        )
                    })}

                </ul>
            </div>
          
          </Link>
        </li>

};

SpotResults.propTypes = {
  results: PropTypes.object.isRequired
};

module.exports = SpotResults;