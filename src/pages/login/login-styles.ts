import { Button } from "@mui/material";
import { styled } from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StyledLogin = styled.div`
  width: 50%;
  display: flex;
`;

export const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.3rem;
`;

export const StyledImage = styled.img``;

export const StyledInfo = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const StyledButton = styled(Button)`
  width: 63%;
  height: 6rem;
  
  &.MuiButton-root {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const StyledCreateButton = styled(Button)`
  width: 63%;
  height: 6rem;
  
  &.MuiButton-root {
    font-size: 2rem;
    font-weight: 700;
    background-color: ${props => props.theme.colors.green};
  }
`;