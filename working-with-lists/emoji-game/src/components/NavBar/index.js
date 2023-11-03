import './index.css'
import {Component, Fragment} from 'react'

class NavBar extends Component {
  render() {
    const {score, topScore, winStatus} = this.props
    const rightContent = winStatus ? (
      ''
    ) : (
      <>
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </>
    )
    return (
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="nav-logo-text">Emoji Game</h1>
        </div>
        <div className="score-container">{rightContent}</div>
      </div>
    )
  }
}

export default NavBar
