import React, { Component } from 'react';
import './global.css';

import ItemsTable from './components/ItemsTable';
import ItemForm from './components/ItemForm';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1>React + Redux Todo list app</h1>
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
            <p>Experiments, experiments!</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
