import React from 'react'
import { Button } from 'semantic-ui-react'
import Task from './Task'

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      redirectTo: false
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd = () => {
    this.setState({
      redirectTo:true
    })
  }

  render(){
    const redirect = this.state.redirectTo
    if( redirect === false){
      return(
        <div>
          <div className="row">
            <button style={{float:'right'}} className="btn btn-primary" onClick={this.handleAdd}>Add</button>
          </div>
        </div>
      )
    }
    else{
      return(
        <div>
          <Task/>
        </div>
      )
    }
  }
}

export default Todo
