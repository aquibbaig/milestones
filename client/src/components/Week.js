import React from 'react'
import AddMilestone from './AddMilestone'

class Week extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      milestones: [],
      redirectTo: false
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:8000/milestones', {
      method:'GET'
    })
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.setState({
        milestones:[...this.state.milestones, data]
      })
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

  handleRefresh = () => {
    fetch('http://localhost:8000/milestones/delete', {
      method:'DELETE'
    })
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    const redirect = this.state.redirectTo
    if( redirect === false){
      return(
        <div>
          <div className="row">
            <h1>MILESTONES</h1><button style={{float:'right'}} className="btn" style={{backgroundColor:'white', color:'black', fontSize:'24px',}} onClick={this.handleAdd}>+</button>
            <button style={{float:'right'}} className="btn" style={{backgroundColor:'white', color:'black', fontSize:'24px',}} onClick={this.handleRefresh}>R</button>
          </div>
          <div>
            {this.state.milestones.map(milestone => (
              milestone.map(task => (
                <li key={task._id} style={{listStyle:'none'}}>
                  {task.name}
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
          <AddMilestone/>
        </div>
      )
    }
  }
}

export default Week
