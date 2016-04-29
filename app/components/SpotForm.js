var React = require('react');
var PropTypes = React.PropTypes;

function SpotForm (props) {
    console.log(props)
    return (
        <div>
            <div className="spot">
            <p className="spot__desc">Search Spotify for an artist</p>
                <form onSubmit={props.onSubmit} className="spot__search">
                    <label htmlFor="spotSearch" className="spot__label"></label>
                    <input type="text" onChange={props.onChange} name="spotSearch" id="spotSearch" className="spot__input"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )

};

SpotForm.propTypes = {

  
};

module.exports = SpotForm;