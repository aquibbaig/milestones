import React from 'react'
import { Button } from 'semantic-ui-react'
import Task from './Task'
import 'whatwg-fetch'

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      redirectTo: false
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:8000/tasks', {
      method:'GET',
    })
    .then(res => {
      if(res.status === 200){
        console.log(res)
      }
    })
    .catch(err => {
      console.log(err)
    })
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
