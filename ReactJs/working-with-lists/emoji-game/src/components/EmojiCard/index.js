import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickingEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onEmoji = () => {
    onClickingEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button type="button" className="emoji-container" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
