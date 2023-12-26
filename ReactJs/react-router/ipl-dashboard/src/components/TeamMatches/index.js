import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import './index.css'

import MatchCard from '../MatchCard'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class TeamMatches extends Component {
  state = {teamMatch: {}, apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const teamMatch = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatch, apiStatus: apiConstants.success})
  }

  renderTeamMatches = () => {
    const {teamMatch} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatch
    const latestMatchDetailsFormatted = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatchesFormatted = recentMatches.map(item => ({
      umpires: item.umpires,
      result: item.result,
      manOfTheMatch: item.man_of_the_match,
      id: item.id,
      date: item.date,
      venue: item.venue,
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      firstInnings: item.first_innings,
      secondInnings: item.second_innings,
      matchStatus: item.match_status,
    }))
    return (
      <div className="team-matches-responsive">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-matches-text">Latest Matches</h1>
        <LatestMatch
          latestMatchDetailsFormatted={latestMatchDetailsFormatted}
        />
        <ul className="match-cards">
          {recentMatchesFormatted.map(item => (
            <MatchCard key={item.id} matchCardDetails={item} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderViewBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderTeamMatches()
      default:
        return null
    }
  }

  teamMatchesClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'SRH':
        return 'srh'
      case 'MI':
        return 'mi'
      case 'KKR':
        return 'kkr'
      case 'DC':
        return 'dc'
      case 'CSK':
        return 'csk'
      case 'KXP':
        return 'kxp'
      case 'RR':
        return 'rr'
      default:
        return null
    }
  }

  render() {
    return (
      <div className={`team-matches-container ${this.teamMatchesClassName()}`}>
        {this.renderViewBasedOnApiStatus()}
      </div>
    )
  }
}

export default TeamMatches
