var React = require('react');
var PropTypes = React.PropTypes;

function formFields (props) {
    console.log(props)
    return (
        <div className="form-wrap">
            is this gett 
            <p>{props.header}</p>
        </div>
    )
}

module.exports = formFields;