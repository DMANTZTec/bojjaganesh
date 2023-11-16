import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {MdWork} from 'react-icons/md'
import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <nav className="nav-container">
      <div className="header-container-desktop">
        <Link to="/" className="nav-image-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="nav-logo"
          />
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="nav-item">
              Jobs
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
      <div className="header-container-mobile">
        <Link to="/" className="nav-image-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="nav-logo"
          />
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="/">
              <AiFillHome className="nav-mobile-item" />
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <MdWork className="nav-mobile-item" />
            </Link>
          </li>
          <li>
            <FiLogOut className="nav-mobile-item" onClick={onLogout} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)