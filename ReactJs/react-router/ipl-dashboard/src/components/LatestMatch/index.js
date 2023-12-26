import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsFormatted} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetailsFormatted

  const renderLatestMatchLeft = () => (
    <div className="latest-match-left">
      <p className="competing-team">{competingTeam}</p>
      <p className="date">{date}</p>
      <p className="venue-result">{venue}</p>
      <p className="venue-result">{result}</p>
    </div>
  )

  const renderLatestMatchRight = () => (
    <div className="latest-match-right">
      <p className="latest-match-right-heads">First Innings</p>
      <p className="latest-match-right-para">{firstInnings}</p>
      <p className="latest-match-right-heads">Second Innings</p>
      <p className="latest-match-right-para">{secondInnings}</p>
      <p className="latest-match-right-heads">Man Of The Match</p>
      <p className="latest-match-right-para">{manOfTheMatch}</p>
      <p className="latest-match-right-heads">Umpires</p>
      <p className="latest-match-right-para">{umpires}</p>
    </div>
  )
  return (
    <div className="latest-match-container">
      <div className="latest-match-left-and-image">
        {renderLatestMatchLeft()}
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr />
      {renderLatestMatchRight()}
    </div>
  )
}

export default LatestMatch
