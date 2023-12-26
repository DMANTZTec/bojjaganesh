import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const activeTabBtn = isActive && 'tab-btn-active'

  const onChangeTabId = () => {
    changeActiveTabId(tabId)
  }
  return (
    <li className="tab-item" onClick={onChangeTabId}>
      <button type="button" className={`tab-btn ${activeTabBtn}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
