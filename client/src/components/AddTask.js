import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import 'whatwg-fetch'

class AddTask extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task:'',
      redirectTo:true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  goBack = () => {
    this.setState({
      redirectTo:false
    })
    this.props.redirected(this.state.redirectTo)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/task/new', {
      method:'POST',
      body:JSON.stringify(this.state),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res => {
      if((res).status === 200){
        console.log('Task Added')
      }
      else{
        console.log('Task not added')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input type = "text" onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>
        <Button onClick={this.goBack}>Back</Button>
      </div>
    )
  }
}

export default AddTask
