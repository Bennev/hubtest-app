import SignLayout from '../../components/sign-layout'
import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledCreateButton,
  StyledImage,
  StyledInfo,
  StyledLogin
} from './login-styles'

import HublocalLogo from '../../assets/images/hublocal-logo.png'
import CustomTextField from '../../components/custom-textfield'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <StyledContainer>
      <SignLayout />
      <StyledLogin>
        <StyledBox>
          <StyledImage src={HublocalLogo} />
          <StyledInfo>
            <CustomTextField label="Email" />
            <CustomTextField label="Senha" />
          </StyledInfo>
          <StyledButton variant="contained" color="primary">
            LOGAR
          </StyledButton>
          <StyledCreateButton
            variant="contained"
            onClick={() => navigate('/register')}
          >
            CRIAR CONTA
          </StyledCreateButton>
        </StyledBox>
      </StyledLogin>
    </StyledContainer>
  )
}

export default Login
