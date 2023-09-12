import {
  StyledAccountCircle,
  StyledContainer,
  StyledLogout,
  StyledProfileName
} from './profile-styles'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()

  return (
    <StyledContainer>
      <StyledAccountCircle />
      <StyledProfileName>Janiu</StyledProfileName>
      <StyledLogout onClick={() => navigate('/')} />
    </StyledContainer>
  )
}

export default Profile
