import { isEmpty } from 'ramda'
import Header from '../../components/header'
import LocationsTable from '../../components/locations-table'
import { locations } from '../../components/locations-table/helpers'
import {
  StyledArrowBack,
  StyledBackButton,
  StyledButton,
  StyledButtonText,
  StyledContainer,
  StyledContext,
  StyledFlexEnd,
  StyledSubHeader,
  StyledTitle
} from './my-company-styles'

const MyCompany = () => {
  return (
    <StyledContainer>
      <Header title="Local Teste" />
      <StyledSubHeader>
        <StyledBackButton>
          <StyledArrowBack color="action" />
          <StyledButtonText>Minhas Empresas</StyledButtonText>
        </StyledBackButton>
      </StyledSubHeader>
      <StyledContext center={isEmpty(locations) ? 1 : 0}>
        {!isEmpty(locations) ? (
          <>
            <StyledFlexEnd>
              <StyledButton variant="contained">Adicionar Local</StyledButton>
            </StyledFlexEnd>
            <LocationsTable />
          </>
        ) : (
          <>
            <StyledTitle>Nenhum local cadastrado!</StyledTitle>
            <StyledButton variant="contained">Adicionar Local</StyledButton>
          </>
        )}
      </StyledContext>
    </StyledContainer>
  )
}

export default MyCompany
