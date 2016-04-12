var React = require('react');
var PropTypes = React.PropTypes;

function DetailMap (props) {
    console.log( props )
    return (
        <div className="detail-map">
            <div id="detail-map__map"></div>
        </div>
    )

};

DetailMap.propTypes = {
  
};

module.exports = DetailMap;