import React from 'react'

class StartButton extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Pomo</button>
      </div>
    );
  }
}


export default StartButton
