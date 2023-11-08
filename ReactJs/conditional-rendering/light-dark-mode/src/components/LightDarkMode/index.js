import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark'}

  onMode = () => {
    const {mode} = this.state
    if (mode === 'dark') {
      this.setState({mode: 'light'})
    } else {
      this.setState({mode: 'dark'})
    }
  }

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'dark') {
      return (
        <div className="card dark">
          <h1 className="head">Click To Change Mode</h1>
          <button
            className="button dark-button"
            onClick={this.onMode}
            type="button"
          >
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="card light">
        <h1 className="head">Click To Change Mode</h1>
        <button className="button" onClick={this.onMode} type="button">
          Dark Mode
        </button>
      </div>
    )
  }

  render() {
    return <div className="container">{this.changeMode()}</div>
  }
}

export default LightDarkMode
