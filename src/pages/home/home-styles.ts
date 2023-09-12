import { css, styled } from "styled-components";
import { Button } from '@mui/material'

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const StyledContext = styled.div<{ center: number }>`
  width: 95%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  ${props => props.center ? css`
    justify-content: center;
  ` : css`
    justify-content: flex-start;
  `}
`;

export const StyledFlexEnd = styled.div`
  display: flex;
  justify-content: end;
  align-self: flex-end;
`;

export const StyledButton = styled(Button)`
  width: 25.8rem;
  height: 5rem;
  
  &.MuiButton-root {
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    text-transform: capitalize;
  }
`;

export const StyledTitle = styled.h1`
  margin: 0;
  max-width: 60rem;
  font-size: 6rem;
  font-weight: 700;
  line-height: 6.5rem;
  color: ${props => props.theme.colors.black};
  text-align: center;
`;