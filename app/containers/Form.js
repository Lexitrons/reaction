var React = require('react');
var First = require('../components/forms/First');
var Second = require('../components/forms/Second');

var Form = React.createClass({

  getInitialState: function () {
      return {
      first: true,
      second:false,
      items: [],
      index: 0
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
      var items = {
          name: this.refs.name.value,
          desc: this.refs.desc.value
        }
      return items;
  },
  Validate: function(value) {
      if(value.length > 4) {
        return true;
      } else {
        return false;
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
      items: newObject
    });

    localStorage.setItem('toDo', JSON.stringify(this.state.items));
  },
  _submitFields: function() {
    var newObject = this.state.items;
    
    newObject.push( this._HandleChange() )
    
    this.setState({ 
      items: newObject
    });

    localStorage.setItem('toDo', JSON.stringify(this.state.items));
    
    
    this.refs.name.value = "";
    this.refs.desc.value = "";
  },

  render: function () { 
    return (
      <div className="main-container">
        <div className="form-wrapper">
               <h2 className="albums-title">First Form</h2>
                <ul className="field-list">
                    <li className="field-wrap">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" ref="name" id="name" />
                    </li>
                    <li className="field-wrap">
                        <label htmlFor="desc">Description</label>
                        <textarea type="text" name="desc" ref="desc" id="desc" />
                    </li>
                    <li className="field-wrap">
                        <button className="submit-fields" onClick={this._submitFields}>Submit</button>
                    </li>
                    <li className="field-wrap">
                        <button className="clear-all"  onClick={this._clearAll}>Clear</button>
                    </li>
                </ul>
        </div>

        <div className="list-tems">
        <ul className="list-items__list">
        {this.state.items.map(function(i ,v ) {
          return (
            <li key={v} className="list-items__item"> 
            <h3>{i.name}</h3> 
            <p>{i.desc} </p>
            <button className="remove-item" onClick={ this.remove.bind( null, v ) } >Remove</button></li>
            )
        }.bind(this))}
        </ul>
        </div>
 

      </div>
    )
  }
});

module.exports = Form;

 