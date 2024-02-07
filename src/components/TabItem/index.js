import './index.css'

const TabItem = props => {
  const {tabDetails, categoryIdDetails, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTabButton = () => {
    categoryIdDetails(tabId)
  }

  const borderTab = isActive ? 'tab-border-style' : ''
  return (
    <li className="tab-list-style">
      <button
        className={`tab-button-style ${borderTab}`}
        type="button"
        onClick={clickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
