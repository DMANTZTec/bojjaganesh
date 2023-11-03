import './index.css'

const BannerCardItem = props => {
  const {cardItems} = props
  const {className, headerText, description} = cardItems
  return (
    <li className={className}>
      <h1 className="head">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
