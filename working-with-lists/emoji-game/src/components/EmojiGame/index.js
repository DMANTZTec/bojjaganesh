import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

const initialEmojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    emojis: initialEmojisList,
    score: 0,
    topScore: 0,
    emojiIds: [],
    winStatus: false,
  }

  render() {
    const {emojis, score, topScore, winStatus} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const onClickingEmoji = id => {
      const {emojiIds} = this.state
      if (emojiIds.includes(id) === false) {
        if (score === 11) {
          this.setState({winStatus: true, topScore: 12})
        }
        this.setState(prevState => ({
          score: prevState.score + 1,
          emojiIds: [...prevState.emojiIds, id],
        }))
      } else {
        if (score > topScore) {
          this.setState({topScore: score})
        }
        this.setState({winStatus: true})
      }
      this.setState({emojis: shuffledEmojisList()})
    }

    const emojisContainer = () => (
      <ul className="emojis-container">
        {emojis.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickingEmoji={onClickingEmoji}
          />
        ))}
      </ul>
    )
    const playAgain = () => {
      this.setState({
        emojisList: initialEmojisList,
        score: 0,
        emojiIds: [],
        winStatus: false,
      })
    }

    const winOrLoseContainer = () => (
      <WinOrLoseCard score={score} playAgain={playAgain} />
    )

    return (
      <div className="app-container">
        <nav className="header">
          <NavBar score={score} topScore={topScore} winStatus={winStatus} />
        </nav>
        <div className="inside-container">
          {winStatus ? winOrLoseContainer() : emojisContainer()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
