import React, { Component } from 'react'

export default class ItemForm extends Component {

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
    ev.preventDefault()

    // Create a item object
    const newItem = {
      title: this.state.input,
      completed: false
    }
    
    // POST the item to the API
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(response => response.json())
      .then(item => console.log(item))
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
