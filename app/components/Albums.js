var React = require('react');
var PropTypes = React.PropTypes;
 
function Albums (props) {
    console.log(props);

    return props.isLoading === true
    ? <p>LOADING</p>
    : <div>
            <h2 className="albums-title">Albums</h2>
            <ul className="albums__list">
                {props.albums.items.map(function(info, index) {
                return( 
                    <li key={index} className="artist-genres__item">
                        <img src={info.images[0].url} alt=""/>
                        {info.name}
                    </li>
                )
            })}

            </ul>
        </div>
     
};

Albums.propTypes = {
 
};

module.exports = Albums;