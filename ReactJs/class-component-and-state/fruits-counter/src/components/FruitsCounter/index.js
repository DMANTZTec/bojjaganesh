import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="app-container">
        <div className="app-card">
          <h1 className="head">
            Bob ate <span className="count">{mangoes}</span> mangoes{' '}
            <span className="count">{bananas}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="images"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="images"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
