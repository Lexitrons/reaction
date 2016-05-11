var React = require('react');
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Home = React.createClass({
  render:function(){
    return (
        <ReactCSSTransitionGroup 
                transitionName={{
                    enter: 'page-appear',
                    enterActive: 'page-appear-active',
                    leave: 'page-leave',
                    leaveActive: 'page-leave-active',
                    appear: 'page-appear',
                    appearActive: 'page-appear-active'
                }}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={300}
                transitionLeave={true}
                transitionAppear={true}
                component='div' 
                className="main-inner home-hero__wrap">
                <div className="home-hero">
                    
                    <h1 className="home-hero__title">Initial Reactions</h1>
                    
                    <p className="home-hero__subtitle">Go easy.... it's my first time.</p>
                    
                    <Link to='/form'className='home-hero__button'>
                      <span >Google Places</span>
                    </Link>
                    <Link to='/music'className='home-hero__button'>
                      <span >Spotify</span>
                    </Link>
                </div> 
        </ReactCSSTransitionGroup>
        

    )
  }
});

module.exports = Home;

