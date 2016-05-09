var React = require('react');
var PropTypes = React.PropTypes;
 
function ArtistInfo (props) {
    return props.isLoading === true
    ? <p>LOADING</p>
    : <div className="artist-info">
        <div className="artist-info__image-wrap">
            <img src={props.info.images[0].url} alt="" className="artist-info__image"/>
        </div>
        <div className="artist-info__content">
            <h1 className="artist-info__title">
                {props.info.name}
            </h1>
            <h3 className="artist-info__followers"><span>Followers: </span>{props.info.followers.total}</h3>
            
            <ul className="artist-info-genres">
            {props.info.genres.map(function(info, index) {
                return( 
                    <li key={index} className="artist-info-genres__item">
                        {info}
                    </li>
                )
            })}

        </ul>
        </div>
            

        </div>
};

ArtistInfo.propTypes = {
 
};

module.exports = ArtistInfo;