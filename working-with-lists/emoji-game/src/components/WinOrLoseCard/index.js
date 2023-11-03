import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const winOrLose = score === 12 ? 'You Won' : 'You Lose'
  const imageUrl =
    winOrLose === 'You Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const typeOfScore = score === 12 ? 'Best Score' : 'Score'
  const onClickPlayBtn = () => {
    playAgain()
  }
  return (
    <div className="win-or-lose-container">
      <div className="win-or-lose-results">
        <h1 className="status">{winOrLose}</h1>
        <p className="best-score">{typeOfScore}</p>
        <p className="final-score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayBtn}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} className="status-image" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
