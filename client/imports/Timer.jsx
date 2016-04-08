import React, {PropTypes} from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: this.props.startAt,
      isRunning: false
    };

    Meteor.setInterval(() => {
      if (this.state.isRunning)
        this.setState({remaining: this.state.remaining - 100});
    }, 100);
  }

  start() {
    this.setState({ isRunning: true });
  }
  stop() {
    this.setState({ isRunning: false });
  }
  reset() {
    this.setState({ isRunning: false, remaining: this.props.startAt });
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <TimerCountdown remaining={this.state.remaining}/>

        <TimerControls isRunning={this.state.isRunning}
                       onStart={this.start.bind(this)}
                       onStop={this.stop.bind(this)}
                       onReset={this.reset.bind(this)} />
      </div>
    );
  }
}
Timer.propTypes = {
  startAt: PropTypes.number.isRequired
};

const TimerCountdown = (props) => {
  return <div>countdown {props.remaining / 1000} seconds</div>;
}

const TimerControls = (props) => {
  let toggle;

  if (props.isRunning)
    toggle = (
      <button onClick={ props.onStop }>stop</button>
    );
  else
    toggle = (
      <div>
        <button onClick={ props.onStart }>start</button>
        <button onClick={ props.onReset }>reset</button>
      </div>
    );

  return toggle;
}
TimerControls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};
