import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleItemStatus, deleteItem } from '../actions/itemActions';


class Item extends Component {

  toggleItemStatus(ev) {
    this.props.toggleItemStatus(this.props.id);
  }

  deleteItem(ev) {
    this.props.deleteItem(this.props.id);
  }

  render() {
    return (
      <tr key={this.props.id}>
        <td><span className={this.props.completed ? 'badge success' : 'badge'}>{this.props.id}</span></td>
        <td>{this.props.completed ? <strike>{this.props.title}</strike> : this.props.title}</td>
        <td>
          <button className="btn-small margin-small" onClick={this.toggleItemStatus.bind(this)}>{this.props.completed ? 'Unckeck' : 'Done'}</button>
        </td>
        <td>
          <button className="btn-small margin-small" onClick={this.deleteItem.bind(this)}>Delete</button>
        </td>
      </tr>
    )
  }
}

Item.propTypes = {
  toggleItemStatus: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default connect(null, { toggleItemStatus, deleteItem })(Item)