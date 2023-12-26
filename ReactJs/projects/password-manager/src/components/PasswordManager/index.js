import {Component} from 'react'

import CreatePassword from '../CreatePassword'

import PasswordContainer from '../PasswordContainer'

import './index.css'

class PasswordManager extends Component {
  state = {passwordsList: []}

  addPassword = password => {
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, password],
    }))
  }

  deletePassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(item => item.id !== id),
    }))
  }

  render() {
    const {passwordsList} = this.state
    return (
      <div className="app-container">
        <div className="app-responsive-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <CreatePassword addPassword={this.addPassword} />
          <PasswordContainer
            passwordsList={passwordsList}
            deletePassword={this.deletePassword}
          />
        </div>
      </div>
    )
  }
}

export default PasswordManager
