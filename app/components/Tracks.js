var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
 
var Link = ReactRouter.Link;

function Track (props) {
    console.log(props);
    return (
        <div className="track-wrap">
        <h2 className="track-list__title">Tracklist</h2>

        <ul className="track-list">
        {props.track.length === props.audio.length && props.track.map(function(i , v) {
            return ( 
                <li key={v} className="track-item">
                    <div className="track-item__content">
                        <div className="track-item__main">
                            <h3 className="track-item__name"><span className="track-item__number">{i.track_number}</span>{i.name}</h3>
                            <div className="track-item__preview">
                                <audio controls>
                                    <source src={i.preview_url}/>
                                </audio>
                            </div>
                            
                        </div>
                        <div className="track-info">
                            <ul className="track-info__list">
                                <li className="track-info__item">
                                    <h3 className="track-info__label">Danceability:</h3>
                                    <p className="track-info__value">{props.audio[v].danceability} <span className="track-info__measure">/1.0</span></p>
                                </li>
                                <li className="track-info__item">
                                    <h3 className="track-info__label">Acousticness:</h3>
                                    <p className="track-info__value">{props.audio[v].acousticness} <span className="track-info__measure">/1.0</span></p>
                                </li>
                                <li className="track-info__item">
                                    <h3 className="track-info__label">Energy:</h3>
                                    <p className="track-info__value">{props.audio[v].energy} <span className="track-info__measure">/1.0</span></p>
                                </li>

                                 <li className="track-info__item">
                                    <h3 className="track-info__label">Instrumentalness:</h3>
                                    <p className="track-info__value">{props.audio[v].instrumentalness}</p>
                                </li>

                                <li className="track-info__item">
                                    <h3 className="track-info__label">Loudness:</h3>
                                    <p className="track-info__value">{props.audio[v].loudness} <span className="track-info__measure">/db</span></p>
                                </li>
                                
                                <li className="track-info__item">
                                    <h3 className="track-info__label">Tempo:</h3>
                                    <p className="track-info__value">{props.audio[v].tempo} <span className="track-info__measure">/bpm</span></p>
                                </li>

                                 
                            </ul> 
                             
                        </div>
                    </div>
              
                </li> )
             } 
             ) 
        }
        </ul>
        </div>
     )
};

Track.propTypes = {
    track: PropTypes.array.isRequired,
    audio: PropTypes.array.isRequired
};

module.exports = Track;