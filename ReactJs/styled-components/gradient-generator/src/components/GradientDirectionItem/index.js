import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, changeActiveBtn} = props
  const {directionId, displayText} = directionDetails
  const onDirectionBtn = () => {
    changeActiveBtn(directionId)
  }
  const opacity = isActive ? 1 : 0.5
  return (
    <ListItem>
      <DirectionButton type="button" opacity={opacity} onClick={onDirectionBtn}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
