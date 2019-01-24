import React from 'react'
import AddTask from './AddTask'
import 'whatwg-fetch'
import { Button } from 'semantic-ui-react'

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      redirectTo: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.updateRedirected = this.updateRedirected.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  updateRedirected = (redirected) => {
    this.setState({
      redirectTo:redirected
    })
  }

  deleteTask = (what) => {
    console.log(what)
    fetch(`http://localhost:8000/task/delete/${what}`,{
      method:'DELETE',
    })
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount(){
    fetch('http://localhost:8000/tasks', {
      method:'GET',
    })
    .then(res => {
      if(res.status === 200){
        return res.json()
      }
    })
    .then((data) => {
      if(data){
        this.setState({
          todos: [...this.state.todos, data]
        })
      }
      console.log(this.state.todos)
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
          <div>
          {this.state.todos.map(todo => (
            todo.map(task => (
              <li key={task._id}>
              {task.name}
              <span>
                <Button onClick={() => this.deleteTask(task._id)}>Delete</Button>
              </span>
              </li>
            ))
            ))}
            </div>
          </div>
      )
    }
    else{
      return(
        <div>
          <AddTask redirected={this.updateRedirected}/>
        </div>
      )
    }
  }
}

export default Todo
