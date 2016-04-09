var React = require('react');
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Home = React.createClass({
  render:function(){
    return (
        <div className="home-hero">
            <h1 className="home-hero__title">First App</h1>
            <p className="home-hero__subtitle">Go easy.... it's my first time.</p>
           <Link to='/form'>
              <button type='button' className='home-hero__button'>Get Started</button>
            </Link>
        </div> 

    )
  }
});

module.exports = Home;

