var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;


function First (props) {
    console.log(props)
    return  (
        <div>
            <h2 className="albums-title">Second Step</h2>
            
            
        </div>
     )
};

First.propTypes = {
 
};

module.exports = First;