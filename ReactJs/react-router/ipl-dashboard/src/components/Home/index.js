import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {teams: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const teams = data.teams.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({teams, apiStatus: apiConstants.success})
  }

  renderTeamCards = () => {
    const {teams} = this.state
    return (
      <ul className="team-cards">
        {teams.map(item => (
          <TeamCard key={item.id} teamCardDetails={item} />
        ))}
      </ul>
    )
  }

  renderHomeHead = () => (
    <div className="home-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        className="ipl-logo"
        alt="ipl logo"
      />
      <h1 className="home-head">IPL Dashboard</h1>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderHome = () => (
    <>
      {this.renderHomeHead()}
      {this.renderTeamCards()}
    </>
  )

  renderViewBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderHome()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="home-container">{this.renderViewBasedOnApiStatus()}</div>
    )
  }
}

export default Home
