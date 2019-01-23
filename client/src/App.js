import React, { Component } from 'react';
import Todo from './components/Todo'
import Week from './components/Week'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Todo/>
              <hr/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Week/>
              <hr/>
            </div>
          </div>
          <div className="row">
            TimeTable
          </div>
        </div>
      </div>
    );
  }
}

export default App;
