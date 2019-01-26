import React, { Component } from 'react';
import Todo from './components/Todo'
import Week from './components/Week'
import TimeTable from './components/TimeTable'
import Pomodoro from './components/Pomodoro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Todo/>
              <hr/>
              <Week/>
              <hr/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TimeTable/>
              <hr/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Pomodoro/>
        </div>
      </div>
    );
  }
}

export default App;
