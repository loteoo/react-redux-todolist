import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createItem } from '../actions/itemActions';


class ItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  onInputChange(ev) {
    this.setState({input: ev.target.value})
  }

  onFormSubmit(ev) {
    ev.preventDefault();

    this.props.createItem({
      title: this.state.input,
      completed: false
    });
    
    this.setState({input: ''})
  }

  render() {
    return (
      <form className="item-form" method="post" onSubmit={this.onFormSubmit.bind(this)}>
        <div className="row flex-center">
          <h2>Create new items!</h2>
        </div>
        <div className="row flex-center">
          <div className="col col-3 align-bottom">
            <div className="form-group">
              <label htmlFor="new-item">New item</label>
              <input 
                type="text"
                placeholder="Type todo here..."
                value={this.state.input}
                onChange={this.onInputChange.bind(this)}
              />
            </div>
          </div>
          <div className="col col-3 align-bottom">
            <div className="form-group">
              <button>Create Todo</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

ItemForm.propTypes = {
  createItem: PropTypes.func.isRequired
}

export default connect(null, { createItem })(ItemForm)