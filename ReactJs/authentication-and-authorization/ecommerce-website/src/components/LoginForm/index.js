import { Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import {Component} from 'react'
import './index.css'

const url = 'https://apis.ccbp.in/login'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '',showError:false}

  loginSuccess = (jwtToken) => {
    const {history} = this.props
    history.replace('/')
    Cookie.set('jwt_token',jwtToken,{expires:20})
  }

  loginFailure = errorMsg => {
    this.setState({errorMsg,showError:true})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    const jwtToken = data.jwt_token
    if (response.ok===true) {
      this.loginSuccess(jwtToken)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const jwtToken=Cookie.get('jwt_token')
    if(jwtToken!==undefined){
      return <Redirect to="/"/>
    }
    const {username, password, errorMsg,showError} = this.state
    return (
      <div className="login-app-container">
        <div className="login-page">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-login-logo-mobile"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <div className="login-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-login-logo-desktop"
              alt="website logo"
            />
            <form className="login-form" onSubmit={this.onLogin}>
              <div className="input-container">
                <label htmlFor="username" className="input-label">
                  USERNAME
                </label>
                <input
                  id="username"
                  type="text"
                  className="input-style"
                  placeholder="Username"
                  value={username}
                  onChange={this.changeUsername}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password" className="input-label">
                  PASSWORD
                </label>
                <input
                  id="password"
                  type="password"
                  className="input-style"
                  placeholder="Password"
                  value={password}
                  onChange={this.changePassword}
                />
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
              {showError && <p className="error-msg">*{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm
