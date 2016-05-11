var React = require('react');
var PropTypes = React.PropTypes;

function Loader (props) {
    return (
        <div className="loader">
            <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#CE4F4F">
                <circle  className="circle" cx="15" cy="15" r="15">
                     
                </circle>
                <circle  className="circle" cx="60" cy="15" r="9" fillOpacity="0.3">
                     
                </circle>
                <circle  className="circle" cx="105" cy="15" r="15">
                     
                </circle>
            </svg>
            <h3 className="loader__label">Loading</h3>
        </div>
    )

};

Loader.propTypes = {
  
};

module.exports = Loader;