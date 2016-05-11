var React = require('react');
var PropTypes = React.PropTypes;

function SpotForm (props) {
    return (
        <div className="spot-wrap">
            <div className="spot">
                <p className="spot__desc">Search Spotify for an artist</p>
                
                <form onSubmit={props.onSubmit} className="spot__search">
                    
                    <input type="text" onChange={props.onChange} placeholder="Search By Artist" name="spotSearch" id="spotSearch" className="spot__input"/>
                    <button type="submit" className="spot__submit">Search</button>
                </form>
            </div>
        </div>
    )

};

SpotForm.propTypes = {

  
};

module.exports = SpotForm;