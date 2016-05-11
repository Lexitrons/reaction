var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
var Loader = require('../components/Loader');

 
var Link = ReactRouter.Link;

 // <img src={info.images[0].url} alt=""/>
function Albums (props) {
    return props.isLoading === true
    ? <Loader />
    : <div>
            <h2 className="albums-title">Albums</h2>
            <ul className="albums__list">
                {props.albums.items.map(function(info, index) {
                    console.log(info)
                return( 
                    <li key={index} className="artist-genres__item">
                        <Link  to={{ pathname: '/album/' + info.id }}  className="related__link">
                            {info.name}
                        </Link>
                    </li>
                )
            })}

            </ul>
        </div>
     
};

Albums.propTypes = {
 
};

module.exports = Albums;