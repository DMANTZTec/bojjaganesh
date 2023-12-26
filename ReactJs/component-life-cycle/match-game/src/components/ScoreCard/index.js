import './index.css'

const ScoreCard = props => {
  const {score, playAgain} = props
  const onPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button className="play-again-btn" type="button" onClick={onPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-image"
        />
        Play Again
      </button>
    </div>
  )
}

export default ScoreCard
