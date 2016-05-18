var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
 
var Link = ReactRouter.Link;

function Loader (props) {
    return (
        <Link to='/music'className='back__button'>
            Back
        </Link>
    )

};

Loader.propTypes = {
  
};

module.exports = Loader;