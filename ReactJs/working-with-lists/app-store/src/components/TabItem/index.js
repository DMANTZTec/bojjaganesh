import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeCategory} = props
  const {tabId, displayText} = tabDetails
  const activeTabClass = isActive ? 'active-tab-btn' : ''
  const onClickTab = () => {
    changeCategory(tabId)
  }
  return (
    <li>
      <button
        onClick={onClickTab}
        type="button"
        className={`tab-btn ${activeTabClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
