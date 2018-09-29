import React, { Component } from 'react'

export default class ItemsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(items => this.setState({items}))
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
            {this.state.items.map(item => (
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
