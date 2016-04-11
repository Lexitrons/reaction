var React = require('react');
var PropTypes = React.PropTypes;

function DetailInfo (props) {
    console.log( props )
    return props.isLoading === true
    ? <p>LOADING</p>
    :  <div className="detail-wrap">
        <div className="detail">
            <h2 className="detail__title">
                {props.info.name}
            </h2>
            <figure className="detail__figure">
                { !!props.image && <img src={props.image[0].url} alt="" className="detail__image"/>}
            </figure>
            
            <ul className="detail__info">
                { !!props.info.formatted_address && 
                    <li className="detail__item"> {props.info.formatted_address}
                </li>}

                { !!props.info.formatted_phone_number && 
                    <li className="detail__item"> {props.info.formatted_phone_number}
                </li>}

                { !!props.info.formatted_phone_number && 
                    <li className="detail__item"> {props.info.formatted_phone_number}
                </li>}

                { !!props.info.types && 
                    <li className="detail__item">
                        <h3 className="detail__subtitle">Types:</h3>
                        <ul className="detail__types">
                        {props.info.types.map(function(info, index){
                            return <li key={index} className="detail__item"> {props.info.types[index]}</li>
                        })}
                        </ul>
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

};

DetailInfo.propTypes = {
  info: PropTypes.object.isRequired,
  
};

module.exports = DetailInfo;