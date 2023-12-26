import './index.css'

const GameImage = props => {
  const {gameImageDetails, changeActiveImage} = props
  const {id, thumbnailUrl} = gameImageDetails

  const onThumbnail = () => {
    changeActiveImage(id)
  }

  return (
    <li className="game-image" onClick={onThumbnail}>
      <button className="thumbnail-btn" type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="image-item" />
      </button>
    </li>
  )
}

export default GameImage
