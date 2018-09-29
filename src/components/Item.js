import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleItemStatus, setItemTitle, deleteItem } from '../actions/itemActions';


class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }


  toggleItemStatus(ev) {
    this.props.toggleItemStatus(this.props.id);
  }

  deleteItem(ev) {
    this.props.deleteItem(this.props.id);
  }

  toggleEditMode(ev) {
    this.setState({editing: !this.state.editing})
  }

  onInputChange(ev) {
    this.props.setItemTitle(this.props.id, ev.target.value);
  }
  
  render() {
    return (
      <tr key={this.props.id}>
        <td><span className={this.props.completed ? 'badge success' : 'badge'}>{this.props.id}</span></td>
        <td>
          {
            this.props.completed 
              ? <strike>{this.props.title}</strike> 
              : this.state.editing
                ? <input type="text" onChange={this.onInputChange.bind(this)} value={this.props.title} style={{width: '100%'}} />
                : this.props.title
          }
        </td>
        <td>
          <button disabled={this.props.completed} className="btn-small" onClick={this.toggleEditMode.bind(this)}>{this.state.editing ? 'Save' : 'Edit'}</button>
        </td>
        <td>
          <button disabled={this.state.editing} className="btn-small" onClick={this.deleteItem.bind(this)}>Delete</button>
        </td>
        <td>
          <button disabled={this.state.editing} className="btn-small" onClick={this.toggleItemStatus.bind(this)}>{this.props.completed ? 'Unckeck' : 'Done'}</button>
        </td>
      </tr>
    )
  }
}

Item.propTypes = {
  toggleItemStatus: PropTypes.func.isRequired,
  setItemTitle: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default connect(null, { toggleItemStatus, setItemTitle, deleteItem })(Item)