import {Component} from 'react'
import './index.css'

const initialState = {
  timeLimit: 25,
  timeLimitSec: 0,
  isRunning: false,
}

class DigitalTimer extends Component {
  state = initialState

  onClickMinus = () => {
    const {timeLimit} = this.state
    if (timeLimit > 1) {
      this.setState(prevState => ({timeLimit: prevState.timeLimit - 1}))
    }
  }

  onClickPlus = () => {
    this.setState(prevState => ({timeLimit: prevState.timeLimit + 1}))
  }

  onStart = () => {
    const {isRunning, timeLimit, timeLimitSec} = this.state
    const isTimerCompleted = timeLimit * 60 === timeLimitSec
    if (isTimerCompleted) {
      clearInterval(this.timerID)
      this.setState({timeLimitSec: 0})
    }
    if (isRunning) {
      clearInterval(this.timerID)
    } else {
      this.timerID = setInterval(() => {
        this.setState(prevState => ({timeLimitSec: prevState.timeLimitSec + 1}))
      }, 1000)
    }

    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  onReset = () => {
    clearInterval(this.timerID)
    this.setState(initialState)
  }

  render() {
    const {timeLimit, isRunning, timeLimitSec} = this.state
    const isDisabled = timeLimitSec > 0
    const minutes = Math.floor((timeLimit * 60 - timeLimitSec) / 60)
    const seconds = (timeLimit * 60 - timeLimitSec) % 60
    const pauseOrRunning = isRunning ? 'Running' : 'Paused'
    const startOrPause = isRunning ? 'Pause' : 'Start'
    const startPauseImage = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startPauseAlt = isRunning ? 'pause icon' : 'play icon'
    const timeLimitMinString = minutes > 9 ? minutes : `0${minutes}`
    const timeLimitSecString = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="app-container">
        <h1 className="head">Digital Timer</h1>
        <div className="app-card">
          <div className="timer-container">
            <div className="timer-card">
              <h1 className="time">
                {timeLimitMinString}:{timeLimitSecString}
              </h1>
              <p className="pause-status">{pauseOrRunning}</p>
            </div>
          </div>
          <div className="timer-set-limit-container">
            <div className="timer-setup-container">
              <button
                type="button"
                onClick={this.onStart}
                className="start-container"
              >
                <img
                  src={startPauseImage}
                  alt={startPauseAlt}
                  className="play-icon"
                />
                <p className="start-text">{startOrPause}</p>
              </button>
              <button
                type="button"
                onClick={this.onReset}
                className="reset-container"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="reset-icon"
                />
                <p className="reset-text">Reset</p>
              </button>
            </div>
            <div className="time-limit-container">
              <p className="time-limit-head">Set Timer Limit</p>
              <div className="time-limit-buttons-container">
                <button
                  type="button"
                  className="limit-buttons"
                  onClick={this.onClickMinus}
                  disabled={isDisabled}
                >
                  -
                </button>
                <div className="time-limit-div">
                  <p>{timeLimit}</p>
                </div>
                <button
                  type="button"
                  className="limit-buttons"
                  onClick={this.onClickPlus}
                  disabled={isDisabled}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
