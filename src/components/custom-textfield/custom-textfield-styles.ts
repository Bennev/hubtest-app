import { styled } from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .7rem;
`;

export const StyledLabel = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => props.theme.colors.black}
`;