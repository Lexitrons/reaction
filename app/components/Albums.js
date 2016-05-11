var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
var Loader = require('../components/Loader');
var Link = ReactRouter.Link;

 // <img src={info.images[0].url} alt=""/>
function Albums (props) {
    return props.isLoading === true
    ? <Loader />
    : <div className="albums-detail">
            <h2 className="albums-detail__title">Albums</h2>
            <ul className="albums-detail__list">
                {props.albums.items.map(function(info, index) {
                return( 
                    <li key={index} className="albums-detail__item">
                        <Link  to={{ pathname: '/album/' + info.id }}  className="albums-detail__link">
                            <img src={info.images[0].url} alt={info.name} className="albums-detail__img"/>
                            <h3 className="albums-detail__name">{info.name}</h3>
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