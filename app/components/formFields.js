var React = require('react');
var Loader = require('../components/Loader');
var PropTypes = React.PropTypes;

function FormFields (props) {
    return props.isLoading === true
    ? <Loader />
    : <div className="form-wrap">
            
            <form onSubmit={props.onSubmit} className="form">
	            <div className="form__inner">
                    <ul className="form__list">
                        <li className="form__field-wrap">
                            <label htmlFor="search" className="form__label">Search </label>
                            <input placetype="text" autoComplete="off" placeholder="Enter Search Phrase" onChange={props.onChange} name="search" id="search" className="form__input"/>
                            <button type="submit" className="form__submit">Submit</button>
                            <button onClick={props.clear} type="button" className="form__clear">Clear</button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>

};

FormFields.propTypes = {
  header: PropTypes.string.isRequired,
  
};

module.exports = FormFields;