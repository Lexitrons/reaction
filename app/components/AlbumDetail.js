var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
 
var Link = ReactRouter.Link;

function AlbumDetail (props) {
    var divStyle;
    if ( props.info.images ) {
        divStyle = {
            backgroundImage: 'url(' + props.info.images[0].url + ')',
        };
    } else {
        divStyle = {};
    }

    return (
        <div className="album-info__wrap" style={divStyle}>

            <div className="album-info">
                <div className="album-info__image-wrap">
                    {props.info.images && <img src={props.info.images[0].url} alt="" className="album-info__image"/>}
                </div>
                <div className="album-info__content">
                    <h1 className="album-info__title">{props.info.name}</h1>
                    {props.info.artists && <h3 className="album-info__artist">By: {props.info.artists[0].name}</h3>}
                    <p className="album-info__release">{props.info.release_date}</p>
                    <p className="album-info__pop">Rating: {props.info.popularity}/100</p>
                </div>
            </div>
        </div>
    )
     
};

AlbumDetail.propTypes = {
 
};

module.exports = AlbumDetail;