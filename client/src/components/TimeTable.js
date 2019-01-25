import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class TimeTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      workList:[],
      created:false,
      sun:'',
      mon:'',
      tue:'',
      wed:'',
      thu:'',
      fri:'',
      sat:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    const date = new Date()
    console.log(date.getDay())
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/new/timetable', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        mon:this.state.mon,
        tue:this.state.tue,
        wed:this.state.wed,
        thu:this.state.thu,
        fri:this.state.fri,
        sat:this.state.sat,
        sun:this.state.sun
      })
    })
    .then(res => {
      if((res).status === 200){
        console.log('TimeTable Added')
        this.setState({
          created:true
        })
      }
      else{
        console.log('TimeTable not added')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    const created = this.state.created
    if(created === false){
      return(
        <div>
          <h2>Create the TimeTable first</h2>
          <hr/>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              Mon: <input type="text" id="1" name="mon" onChange={this.handleChange}/>
            </Form.Field><br/>
            <Form.Field>
              Tue: <input type="text" id="2" name="tue" onChange={this.handleChange}/>
            </Form.Field><br/>
            <Form.Field>
              Wed: <input type="text" id="3" name="wed" onChange={this.handleChange}/>
            </Form.Field><br/>
            <Form.Field>
              Thu: <input type="text" id="4" name="thu" onChange={this.handleChange}/>
            </Form.Field><br/>
            <Form.Field>
              Fri: <input type="text" id="5" name="fri" onChange={this.handleChange}/>
            </Form.Field><br/>
            <Form.Field>
              Sat: <input type="text" id="6" name="sat" onChange={this.handleChange}/>
            </Form.Field><br/>
            <Form.Field>
              Sun: <input type="text" id="7" name="sun" onChange={this.handleChange}/>
            </Form.Field><br/>
            <Button type="submit" className="btn btn-primary">BangON!</Button>
          </Form>
        </div>
      )
    }
    else{
      return(
        <div>created</div>
      )
    }
  }
}

export default TimeTable
