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
		            	<label htmlFor="search" className="form__label">Search </label>
		            	<input type="text" onChange={props.onChange} name="search" id="search" className="form__input"/>
                        { props.error !== "" && 
                            <p className="error">{props.error}</p>
                        }
		            </li>
		            <li className="form__field-wrap">
		            	<button type="submit" className="form__submit">Submit</button>
                        <button onClick={props.clear} type="button" className="form__clear">Clear</button>
		            </li>
	            </ul>
            </form>
        </div>

};

FormFields.propTypes = {
  header: PropTypes.string.isRequired,
  
};

module.exports = FormFields;