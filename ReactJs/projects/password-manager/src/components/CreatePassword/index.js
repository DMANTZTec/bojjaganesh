import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

const colors = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

class CreatePassword extends Component {
  state = {username: '', website: '', password: ''}

  onSubmit = e => {
    e.preventDefault()
    const {addPassword} = this.props
    const {website, username, password} = this.state
    const random = Math.ceil(Math.random() * colors.length)
    const color = colors[random]
    if (website === '') {
      alert('Enter Website')
      return
    }

    if (username === '') {
      alert('Enter Username')
      return
    }

    if (password === '') {
      alert('Enter Password')
      return
    }
    const newPassword = {id: v4(), website, username, password, color}
    addPassword(newPassword)
    this.setState({username: '', website: '', password: ''})
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangeWebsite = e => {
    this.setState({website: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  renderWebsiteInput = () => {
    const {website} = this.state
    return (
      <div className="input-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="input-logos"
          />
        </div>
        <input
          type="text"
          className="input-style"
          placeholder="Enter Website"
          value={website}
          onChange={this.onChangeWebsite}
        />
      </div>
    )
  }

  renderUsernameInput = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="input-logos"
          />
        </div>
        <input
          type="text"
          className="input-style"
          placeholder="Enter Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="input-logos"
          />
        </div>
        <input
          type="password"
          className="input-style"
          placeholder="Enter Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="create-password">
        <form className="form-container" onSubmit={this.onSubmit}>
          <h1 className="create-password-head">Add New Password</h1>
          {this.renderWebsiteInput()}
          {this.renderUsernameInput()}
          {this.renderPasswordInput()}
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          className="create-password-image"
          alt="password manager"
        />
      </div>
    )
  }
}

export default CreatePassword
