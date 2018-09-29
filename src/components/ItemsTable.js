import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/itemActions';

import Item from './Item'

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
              <th>ID #</th>
              <th>Title</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => <Item key={item.id} {...item} />)}
          </tbody>
        </table>

        {/* <p>Total: {items.length}</p> */}
      </div>
    )
  }
}

ItemsTable.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  items: state.todos.items
})

export default connect(mapStateToProps, { fetchItems })(ItemsTable)