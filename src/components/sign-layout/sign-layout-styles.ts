import { styled } from "styled-components";

export const StyledContainer = styled.section`
  width: 50%;
  height: 100%;
`;

export const StyledContent = styled.section`
  padding-top: 9.4rem;
  background-color: ${props => props.theme.colors.blue};
`;

export const StyledImage = styled.img`
  width: 100%;
  max-height: 70rem;
`;

export const StyledFooter = styled.div`
  padding: 2.1rem 6.6rem 3.1rem 6.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${props => props.theme.colors.green};
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 3.5rem;
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

export const StyledDescription = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  color: ${props => props.theme.colors.white};
  text-align: center;
`;