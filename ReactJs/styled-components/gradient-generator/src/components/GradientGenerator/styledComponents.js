import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 30px;
  font-family: 'Roboto';
`
export const Para = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: 'Roboto';
`
export const Button = styled.button`
  border: none;
  background-color: #00c9b7;
  border-radius: 5px;
  color: #1e293b;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 15px;
  font-family: 'Roboto';
  cursor: pointer;
  width: 80px;
  height: 35px;
`
export const List = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 40%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const ColorsContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  width: 20%;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ColorLabel = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const Input = styled.input`
  width: 80px;
  height: 35px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  width: 100px;
  height: 45px;
`
