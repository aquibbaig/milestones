import React from 'react'

class TimerInput extends React.Component {
  render() {
    return (
      <div>
        <h3>This is the Pomodoro section</h3>
        <p>See rules and regulations for the effective use of this technique referenced <a href="https://francescocirillo.com/pages/pomodoro-technique"><i style={{color:'blue'}}><u>here</u></i></a></p>
        <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
      </div>
    );
  }
}
export default TimerInput
