import SignLayout from '../../components/sign-layout'
import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledCreateButton,
  StyledImage,
  StyledInfo,
  StyledLogin
} from './register-styles'

import HublocalLogo from '../../assets/images/hublocal-logo.png'
import CustomTextField from '../../components/custom-textfield'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  return (
    <StyledContainer>
      <SignLayout />
      <StyledLogin>
        <StyledBox>
          <StyledImage src={HublocalLogo} />
          <StyledInfo>
            <CustomTextField label="Nome" />
            <CustomTextField label="Email" />
            <CustomTextField label="Senha" />
            <CustomTextField label="Repetir Senha" />
          </StyledInfo>
          <StyledButton variant="contained" color="primary">
            REGISTRAR
          </StyledButton>
          <StyledCreateButton variant="contained" onClick={() => navigate('/')}>
            LOGAR
          </StyledCreateButton>
        </StyledBox>
      </StyledLogin>
    </StyledContainer>
  )
}

export default Register
