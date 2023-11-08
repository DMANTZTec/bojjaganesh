import './index.css'

const CardItem = props => {
  const {cardItems} = props
  const {className, title, description, imgUrl} = cardItems
  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default CardItem
