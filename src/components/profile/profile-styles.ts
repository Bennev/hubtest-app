import styled from "styled-components";
import { AccountCircle, Logout } from '@mui/icons-material'

export const StyledContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${props => props.theme.colors.grey};
`;

export const StyledProfileName = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.black};
`;

export const StyledAccountCircle = styled(AccountCircle)`
  &.MuiSvgIcon-root {
    width: 5rem;
    height: 5rem;
  }
`;

export const StyledLogout = styled(Logout)`
  cursor: pointer;

  &.MuiSvgIcon-root {
    width: 2.75rem;
    height: 2.5rem;
  }
`;