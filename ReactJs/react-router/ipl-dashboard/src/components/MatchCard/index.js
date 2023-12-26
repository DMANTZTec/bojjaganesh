import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = matchCardDetails
  const matchStatusStyle =
    matchStatus === 'Won' ? 'match-status-win' : 'match-status-lost'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="competing-team-logo-match-card"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-match-card">{competingTeam}</p>
      <p className="result-match-card">{result}</p>
      <p className={matchStatusStyle}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
