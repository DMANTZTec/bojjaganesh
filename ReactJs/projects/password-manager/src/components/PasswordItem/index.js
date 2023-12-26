import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, isChecked} = props
  const {id, username, website, password, color} = passwordDetails
  const initial = website[0].toUpperCase()
  const onDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="initial-details">
        <div className="initial-container">
          <p className={`initial ${color}`}>{initial}</p>
        </div>
        <div className="password-details">
          <p className="website-name">{website}</p>
          <p className="username">{username}</p>
          {isChecked ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
