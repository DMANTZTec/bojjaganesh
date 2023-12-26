import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Heading,
  Para,
  List,
  Button,
  ColorContainer,
  ColorLabel,
  ColorsContainer,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeBtnValue: gradientDirectionsList[0].value,
    color1Value: '#8ae323',
    color2Value: '#014f7b',
    activeBtnId: gradientDirectionsList[0].directionId,
  }

  onColor1 = e => {
    this.setState({color1Value: e.target.value})
  }

  onColor2 = e => {
    this.setState({color2Value: e.target.value})
  }

  changeActiveBtn = directionId => {
    this.setState({activeBtnId: directionId})
  }

  onGenerate = () => {
    const {activeBtnId, color1Value, color2Value} = this.state
    const activeObject = gradientDirectionsList.find(
      item => item.directionId === activeBtnId,
    )
    const {value} = activeObject
    this.setState({
      color1: color1Value,
      color2: color2Value,
      activeBtnValue: value,
    })
  }

  render() {
    const {
      color1,
      color2,
      activeBtnValue,
      activeBtnId,
      color1Value,
      color2Value,
    } = this.state
    return (
      <AppContainer
        color1={color1}
        color2={color2}
        direction={`to ${activeBtnValue}`}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <List>
          {gradientDirectionsList.map(item => (
            <GradientDirectionItem
              key={item.directionId}
              directionDetails={item}
              isActive={item.directionId === activeBtnId}
              changeActiveBtn={this.changeActiveBtn}
            />
          ))}
        </List>
        <Para>Pick the Colors</Para>
        <ColorsContainer>
          <ColorContainer>
            <ColorLabel> {color1}</ColorLabel>
            <Input value={color1Value} type="color" onChange={this.onColor1} />
          </ColorContainer>
          <ColorContainer>
            <ColorLabel>{color2}</ColorLabel>
            <Input value={color2Value} type="color" onChange={this.onColor2} />
          </ColorContainer>
        </ColorsContainer>
        <Button onClick={this.onGenerate}>Generate</Button>
      </AppContainer>
    )
  }
}

export default GradientGenerator
