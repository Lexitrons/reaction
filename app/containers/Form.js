var React = require('react');
var First = require('../components/forms/First');
var Second = require('../components/forms/Second');

var Form = React.createClass({

  getInitialState: function () {
      return {
      first: true,
      second:false,
      items: [],
      index: 0,
      showList: true,
      single: {},
      singleIndex: -1
    }

  },
  componentWillMount:function(){
    if(localStorage.toDo ) {
        this.setState({
          items : JSON.parse(localStorage.toDo)
        })
        console.log(this.state.items)
    }
  },

  componentDidMount: function() {
  },

  componentWillUpdate:function() {
     
  },
  _HandleChange :function (a) {
    var i = 0;
    var refs = this.refs
      var items = {
          name: this.Validate(this.refs.name),
          desc: this.Validate(this.refs.desc),
          subtitle: this.Validate(this.refs.subtitle),
          email: this.Validate(this.refs.email),
          lastName: this.Validate(this.refs.lastName) 
        }
      return items;
  },
  Validate: function(input) {
       if( input.value.length > 0 ) {
            return input.value
       } else {
            return "N/A"
       }
  },
  _clearAll: function() {
    localStorage.setItem('toDo', "");
     this.setState({
          items : []
        })
  },
  remove: function( v ){
    var newObject = this.state.items;
    
    newObject.splice(v , 1)
    
    this.setState({ 
      items: newObject,
      single : {},
      showList: true,
      singleIndex: -1
    });

    localStorage.setItem('toDo', JSON.stringify(this.state.items));
  },
  _submitFields: function() {
    var newObject = this.state.items;
    
    newObject.push( this._HandleChange() )
    
    this.setState({ 
      items: newObject,
      single : {},
      showList: true,
      singleIndex: -1
    });

    localStorage.setItem('toDo', JSON.stringify(this.state.items));
    
    
    this.refs.name.value = "";
    this.refs.desc.value = "";
    this.refs.subtitle.value = "";
    this.refs.email.value = "";
    this.refs.lastName.value = "";
  },
  showMore: function( v ) {

    this.setState({
      single : this.state.items[v],
      singleIndex: v,
      showList: false,
    })
  },
  showList: function() {

    this.setState({
      single : {},
      showList: true,
      singleIndex: -1
    })
  },

  render: function () { 
    var showMod;
    if (this.state.showList & this.state.items.length > 0 ) {
        showMod = true;
    } else {
        showMod = false;
    }
    return (
      <div className="form-main-container">
        <div className="form-wrapper">
            <div className="form-wrapper__inner">
               <h2 className="form-title">Making Lists</h2>
                    <ul className="field-list">
                        <li className="field-wrap">
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="name" placeholder="First Name" ref="name" id="name" />
                        </li>
                        <li className="field-wrap">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" placeholder="Last Name" ref="lastName" id="lastName" />
                        </li>
                        <li className="field-wrap">
                            <label htmlFor="subtitle">Subtitle</label>
                            <input type="text" name="subtitle" placeholder="Title" ref="subtitle" id="subtitle" />
                        </li>
                        <li className="field-wrap">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Email" ref="email" id="email" />
                        </li>
                        <li className="field-wrap">
                            <label htmlFor="desc">Description</label>
                            <textarea type="text" name="desc" placeholder="Description" ref="desc" id="desc" />
                        </li>
                        <li className="field-wrap">
                            <button className="submit-fields" type="button" onClick={this._submitFields}>Submit</button>
                        </li>
                    </ul>
              </div>
        </div>

        { showMod && 
          <div className="list-items">
          <div className="list-items__inner"> 
           
          <ul className="list-items__list">
          {this.state.items.map(function(i ,v ) {
            return (
                <li key={v} className="list-items__item"> 
              
                    <div className="list-items__content">
                        <h3>{i.name}</h3> 
                        <p>{i.subtitle} </p>
                    </div>

                    <button className="remove-item" onClick={ this.remove.bind( null, v ) } > 
                        
                        <svg x="0px" y="0px" viewBox="1 -1 32 32">
                            <path d="M20.6,15l6.1,6.1c0.4,0.4,0.4,1,0,1.4l-2.2,2.2c-0.4,0.4-1,0.4-1.4,0L17,18.6l-6.1,6.1c-0.4,0.4-1,0.4-1.4,0l-2.2-2.2
                            c-0.4-0.4-0.4-1,0-1.4l6.1-6.1L7.3,8.9c-0.4-0.4-0.4-1,0-1.4l2.2-2.2c0.4-0.4,1-0.4,1.4,0l6.1,6.1l6.1-6.1c0.4-0.4,1-0.4,1.4,0
                            l2.2,2.2c0.4,0.4,0.4,1,0,1.4C26.7,8.9,20.6,15,20.6,15z"/>
                        </svg>

                        <span>Remove</span>
                    </button>
                    <button className="show-more-item" onClick={ this.showMore.bind( null, v ) } >
                        <svg  x="0px" y="0px" viewBox="3 -1 35 32">
                            <path d="M20.2,3.3C9.6,3.3,3,15,3,15s6.5,11.7,17.2,11.7c9.9,0,17.5-11.7,17.5-11.7S30.2,3.3,20.2,3.3z M20.3,20.3
                                c-2.9,0-5.2-2.3-5.2-5.2s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S23.1,20.3,20.3,20.3z M20.3,12.4c-1.4,0-2.6,1.2-2.6,2.6s1.2,2.6,2.6,2.6
                                s2.6-1.2,2.6-2.6C22.9,13.6,21.7,12.4,20.3,12.4z"/>
                            </svg>
                        <span>Show All</span>
                    </button>
                </li>
              )
          }.bind(this))}

          {this.state.items.length > 0 &&
            <div className="clear-all"> 
              <button className="clear-all__button" onClick={this._clearAll}>
                    <svg x="0px" y="0px" viewBox="1 -1 32 32">
                            <path d="M20.6,15l6.1,6.1c0.4,0.4,0.4,1,0,1.4l-2.2,2.2c-0.4,0.4-1,0.4-1.4,0L17,18.6l-6.1,6.1c-0.4,0.4-1,0.4-1.4,0l-2.2-2.2
                            c-0.4-0.4-0.4-1,0-1.4l6.1-6.1L7.3,8.9c-0.4-0.4-0.4-1,0-1.4l2.2-2.2c0.4-0.4,1-0.4,1.4,0l6.1,6.1l6.1-6.1c0.4-0.4,1-0.4,1.4,0
                            l2.2,2.2c0.4,0.4,0.4,1,0,1.4C26.7,8.9,20.6,15,20.6,15z"/>
                        </svg>Clear All</button>
            </div>}
          </ul>
          </div>
           </div>
        }

        {!this.state.showList && 
            <div className="single-item">
                <ul className="single-item__list">
                    <li>
                        <h2>
                            <span className="single-item__first">{this.state.single.name}</span>
                            <span className="single-item__last">{this.state.single.lastName}</span>
                        </h2>
                    </li>
                    <li>
                        <span className="single-item__label">Title</span>
                        <h3>
                            
                            {this.state.single.subtitle}
                        </h3>
                    </li>
                    <li>
                        <h4>
                            <span className="single-item__label">Email</span>
                            {this.state.single.email}
                        </h4>
                    </li>
                    <li> 
                        <h5 className="single-item__label">Description</h5>
                        <p>{this.state.single.desc}</p>
                        
                    </li>
                    <li>
                        <div className="single-item__controls">
                            <button className="single-item__show-list" onClick={ this.showList } >Show List</button>
                            <button className="single-item__remove-item" onClick={ this.remove.bind( null, this.state.singleIndex ) } >Remove</button>
                        </div>
                    </li>
                </ul>
            </div>
        }

      </div>
    )
  }
});

module.exports = Form;

 