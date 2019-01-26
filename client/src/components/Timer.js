import React from 'react'

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100 }}>{this.props.value}:{this.props.seconds}</h1>
      </div>
    );
  }
}

export default Timer
