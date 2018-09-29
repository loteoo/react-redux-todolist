import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleItemStatus } from '../actions/itemActions';


class Item extends Component {

  toggleItemStatus(ev) {
    this.props.toggleItemStatus(this.props.id);
  }

  render() {
    return (
      <tr key={this.props.id}>
        <td><span className={this.props.completed ? 'badge success' : 'badge'}>{this.props.id}</span></td>
        <td>{this.props.title}</td>
        <td>
          <button className="btn-small margin-small" onClick={this.toggleItemStatus.bind(this)}>Done</button>
          <button className="btn-small margin-small">Delete</button>
        </td>
      </tr>
    )
  }
}

Item.propTypes = {
  toggleItemStatus: PropTypes.func.isRequired
}

export default connect(null, { toggleItemStatus })(Item)