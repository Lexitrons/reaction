var React = require('react');
var PropTypes = React.PropTypes;
var ReviewsContainer = require('../containers/ReviewsContainer');

function DetailInfo (props) {
 
    return (
        <div className="detail-wrap">
        <div className="detail">
            <div className="detail__header">
                <h2 className="detail__title">
                    {props.info.name}
                </h2>
                <figure className="detail__figure">
                    { !!props.image && <img src={props.image[0].url} alt="" className="detail__image"/>}
                </figure>
            </div>
            
            <ul className="detail__info">
                { !!props.info.formatted_address && 
                    <li className="detail__item"> 
                        <p className="detail__address">
                            {props.info.formatted_address}
                        </p>
                </li>}

                { !!props.info.formatted_phone_number && 
                    <li className="detail__item"> {props.info.formatted_phone_number}
                </li>}

                { !!props.info.formatted_phone_number && 
                    <li className="detail__item"> {props.info.formatted_phone_number}
                </li>}

                { !!props.info.reviews && 
                    <li className="detail__item"> 
                         <ReviewsContainer
                                review={props.info.reviews}
                            />
                    </li>
                }

                { !!props.info.website && 
                    <li className="detail__item"> 
                        <a target="_blank" href={props.info.website} className="detail__link">View Website</a>
                    </li>
                }

                { !!props.info.url && 
                    <li className="detail__item"> 
                        <a href={props.info.url} target="_blank" className="detail__link">View On Google Maps</a>
                    </li>
                }

               
            </ul>
        </div>
    </div>
)
};

DetailInfo.propTypes = {
  info: PropTypes.object.isRequired,
  
};

module.exports = DetailInfo;