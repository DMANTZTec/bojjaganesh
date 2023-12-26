import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 10px;
  width: 45%;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`
export const DirectionButton = styled.button`
  background-color: #ffffff;
  color: #014f7b;
  opacity: ${props => props.opacity};
  font-size: 13px;
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  font-family: 'Roboto';
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 35px;
`
