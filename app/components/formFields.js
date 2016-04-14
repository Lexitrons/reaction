var React = require('react');
var PropTypes = React.PropTypes;

function FormFields (props) {
    return props.isLoading === true
    ? <p>LOADING</p>
    : <div className="form-wrap">
            
            <form onSubmit={props.onSubmit} className="form">
	            <div className="form__inner">
                    <h1 className="form__header">{props.header}</h1>
                    <p className="form__subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
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
                </div>
            </form>
        </div>

};

FormFields.propTypes = {
  header: PropTypes.string.isRequired,
  
};

module.exports = FormFields;