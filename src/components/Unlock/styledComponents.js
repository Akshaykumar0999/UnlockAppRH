// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #161617;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const LockCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageCard = styled.img`
  height: 100px;
  width: 100px;
`
export const Heading = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #e2e8f0;
`
export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border-radius: 5px;
  height: 35px;
  width: 80px;
`
