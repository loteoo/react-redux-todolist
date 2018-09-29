import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/itemActions';

class ItemsTable extends Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="container items-table">
        <h2>Items:</h2>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Value</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                <label className="paper-check">
                  <input type="checkbox" name="completed" value={item.completed} /> <span>Done</span>
                </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <p>Total: {items.length}</p> */}
      </div>
    )
  }
}

ItemsTable.PropTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  items: state.items.items
})

export default connect(mapStateToProps, { fetchItems })(ItemsTable)