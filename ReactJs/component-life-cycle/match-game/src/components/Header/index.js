import './index.css'

const Header = props => {
  const {score, time} = props
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="header-right-container">
        <li className="list-item">
          <p className="score-text">Score:</p>
          <p className="score-time">{score}</p>
        </li>
        <li className="list-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="score-time">{time} sec</p>
        </li>
      </ul>
    </div>
  )
}
export default Header
