var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router"); 
var Link = ReactRouter.Link;

function RelatedArtists (props) {
    console.log(props);

    return props.isLoading === true
    ? <p>LOADING</p>
    : <div>
        <ul className="related">
            {props.related.artists.map(function(info, index) {
                return( 
                    <li key={index} className="related__item">
                         <Link  onClick={props.reRender} to={{ pathname: 'musicDetail',  query: { artist:  info.id} }}  className="related__link">
                             
                            {info.name}
                        </Link>
                    </li>
                )
            })}

        </ul>
        </div>
     
};

RelatedArtists.propTypes = {
 
};

module.exports = RelatedArtists;