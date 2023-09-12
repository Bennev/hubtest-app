import Profile from '../profile'
import {
  StyledBusiness,
  StyledCompany,
  StyledContainer,
  StyledTitle
} from './header-styles'

type THeaderProps = {
  title?: string
}

const Header = ({ title }: THeaderProps) => {
  return (
    <StyledContainer>
      <StyledCompany>
        <StyledBusiness />
        <StyledTitle>{title ?? 'Minhas Empresas'}</StyledTitle>
      </StyledCompany>
      <Profile />
    </StyledContainer>
  )
}

export default Header
