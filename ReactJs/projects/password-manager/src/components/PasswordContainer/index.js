import {Component} from 'react'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordContainer extends Component {
  state = {checked: false, searchInput: ''}

  changeChecked = e => {
    this.setState({checked: e.target.checked})
  }

  changeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  renderHeader = () => {
    const {passwordsList} = this.props
    const count = passwordsList.length
    return (
      <div className="password-container-header">
        <div className="head-count">
          <h1 className="password-container-head">Your Passwords</h1>
          <p className="passwords-count">{count}</p>
        </div>
        <div className="search-input-container">
          <div className="search-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-logo"
            />
          </div>
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.changeSearchInput}
          />
        </div>
      </div>
    )
  }

  getFilteredPasswords = () => {
    const {passwordsList} = this.props
    const {searchInput} = this.state
    const passwordsFiltered = passwordsList.filter(item =>
      item.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return passwordsFiltered
  }

  renderPasswords = () => {
    const {deletePassword} = this.props
    const {checked} = this.state
    const passwordsFiltered = this.getFilteredPasswords()
    return (
      <ul className="passwords-list">
        {passwordsFiltered.map(item => (
          <PasswordItem
            key={item.id}
            passwordDetails={item}
            deletePassword={deletePassword}
            isChecked={checked}
          />
        ))}
      </ul>
    )
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="no-passwords-text">No Passwords</p>
    </div>
  )

  render() {
    const passwordsFiltered = this.getFilteredPasswords()
    return (
      <div className="passwords-container">
        {this.renderHeader()}
        <hr />
        <div className="show-passwords-container">
          <input
            type="checkbox"
            className="checkbox"
            id="showPasswords"
            onChange={this.changeChecked}
          />
          <label htmlFor="showPasswords" className="show-passwords">
            Show Passwords
          </label>
        </div>
        {passwordsFiltered.length === 0
          ? this.renderNoPasswordsView()
          : this.renderPasswords()}
      </div>
    )
  }
}

export default PasswordContainer
