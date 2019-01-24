import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import 'whatwg-fetch'

class AddMilestone extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      milestone:'',
      redirectTo:true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/milestone/new', {
      method:'POST',
      body:JSON.stringify(this.state),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res => {
      if((res).status === 200){
        console.log('Milestone Added')
      }
      else{
        console.log('Milestone not added')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    this.setState({
      milestone: e.target.value
    })
  }

  render(){
    return(
      <div>
        <Button href="/" style={{textDecoration:'none'}}>X</Button>
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input type = "text" onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AddMilestone
