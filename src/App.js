import React, { Component } from 'react';
import './global.css';

import { Provider } from 'react-redux';

import ItemsTable from './components/ItemsTable';
import ItemForm from './components/ItemForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <div className="container">
              <h1>React + Redux Todo list app</h1>
              <p>Uses <a href="https://jsonplaceholder.typicode.com/">JSON placeholder</a> api (persistant)</p>
            </div>
          </header>
          <main>
            
            <hr />

            <ItemsTable />
            
            <hr />

            <ItemForm />
          </main>
          
          <hr />

          <footer>
            <div className="container">
              <p>Built with the <a href="https://www.getpapercss.com/docs/">paper.css</a> theme</p>
              <p>By <b>Alexandre Lotte</b></p>
              <p>Experiments, experiments!</p>
            </div>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
