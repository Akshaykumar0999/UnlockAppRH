// Write your code here
import {useState} from 'react'
import {
  Button,
  LockCard,
  ImageCard,
  Heading,
  AppContainer,
} from './styledComponents'

const Unlock = () => {
  const [btnStatus, setBtnStatus] = useState(false)
  const onClickChangeStatus = () => {
    setBtnStatus(prevState => !prevState)
  }

  const ImageUrls = btnStatus
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const AltProps = btnStatus ? 'unlock' : 'lock'
  return (
    <AppContainer>
      <LockCard>
        <ImageCard src={`${ImageUrls}`} alt={`${AltProps}`} />
        <Heading>
          {btnStatus ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </Heading>
      </LockCard>
      <Button type="button" onClick={onClickChangeStatus}>
        {btnStatus ? 'Lock' : 'Unlock'}
      </Button>
    </AppContainer>
  )
}

export default Unlock
