var React = require('react');
var PropTypes = React.PropTypes;

function formDesc (props) {
    return props.isLoading === true
    ? <p>LOADING</p>
    : <div className="form-desc-wrap">
            <div className="form-desc__inner">
                <h1 className="form-desc__header">Header</h1>
                    <p className="form-desc__subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

};

formDesc.propTypes = {

  
};

module.exports = formDesc;