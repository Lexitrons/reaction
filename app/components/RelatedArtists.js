var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router"); 
var Loader = require('../components/Loader');
var Link = ReactRouter.Link;

function RelatedArtists (props) {
    return props.isLoading === true
    ? <Loader />
    : <div className="related-artists">
        <div className="related-artists__content">
        <h2 className="related-artists__heading">Related Artists</h2>
        <ul className="related">
            {props.related.artists && props.related.artists.map(function(info, index) {
                return( 
                    <li key={index} className="related__item">
                            <Link  to={{ pathname: '/music/artist/' + info.id }}  className="related__link">
                               <div className="related__img-wrap">
                                    {info.images.length > 0 && 
                                        <img src={info.images[1].url} alt={info.name} className="albums-detail__img"/>
                                    }
                               </div>
                                {info.name}
                        </Link>
                    </li>
                )
            })}

        </ul>
        </div>
    </div>
     
};

RelatedArtists.propTypes = {
 related: PropTypes.object.isRequired
};

module.exports = RelatedArtists;