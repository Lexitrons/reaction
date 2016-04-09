var React = require('react');
var PropTypes = React.PropTypes;

function FormFields (props) {
    return props.isLoading === true
    ? <p>LOADING</p>
    : <div className="form-wrap">
            <h1 className="form-header">{props.header}</h1>
            <form onSubmit={props.onSubmit} className="form">
	            <ul className="form__list">
		            <li className="form__field-wrap">
		            	<label htmlFor="first" className="form__label">First Name</label>
		            	<input type="text" onChange={props.onChange} name="firstname" id="first" className="form__input"/>
		  
		            </li>

		            <li className="form__field-wrap">
		            	<label htmlFor="last" className="form__label">Last Name</label>
		            	<input type="text" onChange={props.onChange} name="lastname" id="last" className="form__input"/>
		  
		            </li>
		            <li className="form__field-wrap">
		            	<button type="submit" className="form__submit">Submit</button>
		            </li>
	            </ul>
            </form>

            <div id="resultsWrap"></div>
        </div>

};

FormFields.propTypes = {
  header: PropTypes.string.isRequired,
  
};

module.exports = FormFields;