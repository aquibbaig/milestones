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
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Week/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
