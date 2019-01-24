import React from 'react'
import AddMilestone from './AddMilestone'

class Week extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weekitems: [],
      redirectTo: false
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  // componentDidMount(){
  //
  // }

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
          <AddMilestone/>
        </div>
      )
    }
  }
}

export default Week
