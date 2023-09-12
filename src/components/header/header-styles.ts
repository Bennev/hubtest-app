import { styled } from "styled-components";
import { Business } from '@mui/icons-material/'

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
`;

export const StyledCompany = styled.div`
  padding: 0 3.2rem;
  display: flex;
  align-items: center;
  gap: .8rem;
`;

export const StyledBusiness = styled(Business)`
  &.MuiSvgIcon-root {
    width: 2.75rem;
    height: 2.5rem;
  }
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;