var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;


function First (props) {
    console.log(props)
    return  (
        <div>
            <h2 className="albums-title">First Form</h2>
            <ul className="field-list">
                <li className="field-wrap">
                    <label htmlFor="name">Name</label>
                    <input type="text" ref="name" name="name" id="name" onChange={props.change}/>
                </li>
                <li className="field-wrap">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" ref="desc" name="desc" id="desc" onChange={props.change}/>
                </li>
                <li className="field-wrap">
                    <button className="submit-fields" onClick={props.submit}>Submit</button>
                </li>
            </ul>
        </div>
     )
};

First.propTypes = {
 
};

module.exports = First;