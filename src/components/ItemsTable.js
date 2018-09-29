import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/itemActions';

import Item from './Item'

class ItemsTable extends Component {

  componentWillMount() {
    this.props.fetchItems(this.props.items.length);
  }

  loadMore() {
    this.props.fetchItems(this.props.items.length);
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
              <th>Edit</th>
              <th>Delete</th>
              <th>Toggle</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => <Item key={item.id} {...item} />)}
          </tbody>
        </table>

        <div className="row flex-center">
          <button className="margin" onClick={this.loadMore.bind(this)}>Load more!</button>
        </div>
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