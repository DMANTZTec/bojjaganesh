import {Component} from 'react'
import './index.css'

class EvenOddAPP extends Component {
  state = {count: 0, countType: 'Even'}

  changeState = () => {
    const {countType} = this.state
    if (countType === 'Even') {
      return <p className="para">Count is Even</p>
    }
    return <p className="para">Count is Odd</p>
  }

  onIncrement = () => {
    let randomNumber = Math.random() * 100
    randomNumber = Math.ceil(randomNumber)
    console.log(randomNumber)
    if (randomNumber % 2 === 0) {
      this.setState({count: randomNumber, countType: 'Even'})
    } else {
      this.setState({count: randomNumber, countType: 'Odd'})
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="head">Count {count}</h1>
          {this.changeState()}
          <button onClick={this.onIncrement} className="button" type="button">
            Increment
          </button>
          <p className="para2">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddAPP
