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
    this.clearTable = this.clearTable.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  clearTable = (e) => {
    fetch('http://localhost:8000/deleteTable', {
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

  componentDidMount(){
    fetch('http://localhost:8000/timetable', {
      method:'GET'
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      if(data.length === 1){
        this.setState({
          created:true,
          workList:data[0]
        })
        const date = (new Date()).getDay()
        document.getElementById(date).style.backgroundColor = 'green'
      }
      console.log(this.state.workList)
    })
    .catch(err => {
      console.log(err)
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
        return res.json()
      }
      else if((res).status === 400){
        window.alert("TimeTable already exists")
      }
      else{
        console.log('TimeTable not added')
      }
    })
    .then((data) => {
      this.setState({
        workList: [...this.state.workList, data],
        created:true
      })
      window.location.reload()
      console.log(this.state)
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
        <div>
          <table style={{textAlign:'left', border:'2px solid black', borderCollapse:'collapse'}}>
            <thead>
            <tr>
              <th>Day</th>
              <th>WorkList</th>
            </tr>
            </thead>
            <tbody>
            <tr id="1">
              <td style={{backgroundColor:'#A4ACB9'}}>Monday</td>
              <td>{(this.state.workList)['mon']}</td>
            </tr>
            <tr id="2">
              <td style={{backgroundColor:'#A4ACB9'}}>Tuesday</td>
              <td>{(this.state.workList)['tue']}</td>
            </tr>
            <tr id="3">
              <td style={{backgroundColor:'#A4ACB9'}}>Wednesday</td>
              <td>{(this.state.workList)['wed']}</td>
            </tr>
            <tr id="4">
              <td style={{backgroundColor:'#A4ACB9'}}>Thursday</td>
              <td>{(this.state.workList)['thu']}</td>
            </tr>
            <tr id="5">
              <td style={{backgroundColor:'#A4ACB9'}}>Friday</td>
              <td>{(this.state.workList)['fri']}</td>
            </tr>
            <tr id="6">
              <td style={{backgroundColor:'#A4ACB9'}}>Monday</td>
              <td>{(this.state.workList)['sat']}</td>
            </tr>
            <tr id="0">
              <td style={{backgroundColor:'#A4ACB9'}}>Sunday</td>
              <td>{(this.state.workList)['sun']}</td>
            </tr>
            </tbody>
          </table>
          <Button onClick={this.clearTable} style={{backgroundColor:'white', color:'black', fontSize:'24px',}}><i>Recreate</i></Button><br/>
        </div>
      )
    }
  }
}

export default TimeTable
