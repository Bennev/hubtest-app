import React from 'react'
import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledFooter,
  StyledImage,
  StyledTitle
} from './sign-layout-styles'

import IntroImage from '../../assets/images/intro.png'

const SignLayout = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledImage src={IntroImage} />
        <StyledFooter>
          <StyledTitle>Junte-se a vários clientes satisfeitos.</StyledTitle>
          <StyledDescription>
            Cliente HubLocal ganha mais relevância, autoridade e visibilidade.
            Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
          </StyledDescription>
        </StyledFooter>
      </StyledContent>
    </StyledContainer>
  )
}

export default SignLayout
