import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class LoginRoute extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label htmlFor="username" className="input-label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-style"
          value={username}
          placeholder="Username"
          onChange={this.changeUsername}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-style"
          value={password}
          placeholder="Password"
          onChange={this.changePassword}
        />
      </div>
    )
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg, showError: true})
  }

  submitLoginForm = async event => {
    const {username, password} = this.state
    const userDetails = {username, password}
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      this.onLoginSuccess(jwtToken)
    } else {
      const errorMsg = data.error_msg
      this.onLoginFailure(errorMsg)
    }
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="login-image"
          />
          <form className="login-form" onSubmit={this.submitLoginForm}>
            {this.renderUsername()}
            {this.renderPassword()}
            <button type="submit" className="login-btn">
              Login
            </button>
            {showError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
