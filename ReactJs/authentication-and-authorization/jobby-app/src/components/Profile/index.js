import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from '../Loader'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Profile extends Component {
  state = {apiStatus: apiConstants.initial, profileDetails: {}}

  componentDidMount() {
    this.getProfile()
  }

  getProfile = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const profileDetails = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({apiStatus: apiConstants.success, profileDetails})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderProfileView = () => {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile-container">
        <img src={profileImageUrl} alt="profile" className="profile-image" />
        <h1 className="profile-name">{name}</h1>
        <p className="profile-description">{shortBio}</p>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loading-view">
      <Loader />
    </div>
  )

  renderProfileFailureView = () => (
    <div className="profile-failure-container">
      <button
        className="profile-retry-btn"
        type="button"
        onClick={this.getProfile}
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoadingView()
      case apiConstants.failure:
        return this.renderProfileFailureView()
      case apiConstants.success:
        return this.renderProfileView()
      default:
        return null
    }
  }
}

export default Profile