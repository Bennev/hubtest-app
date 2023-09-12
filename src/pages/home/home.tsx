import { isEmpty } from 'ramda'
import CompaniesTable from '../../components/companies-table'
import Header from '../../components/header'
import {
  StyledButton,
  StyledContainer,
  StyledContext,
  StyledFlexEnd,
  StyledTitle
} from './home-styles'
import { companies } from '../../components/companies-table/helpers'
import DialogFormCompany from '../../components/dialog-form-company'
import { useState } from 'react'

const Home = () => {
  const [openFormCompanyDialog, setOpenFormCompanyDialog] = useState(false)
  const [companyId, setCompanyId] = useState('')

  console.log({ openFormCompanyDialog })

  return (
    <StyledContainer>
      <Header />
      <StyledContext center={isEmpty(companies) ? 1 : 0}>
        {!isEmpty(companies) ? (
          <>
            <StyledFlexEnd>
              <StyledButton variant="contained">Adicionar Empresa</StyledButton>
            </StyledFlexEnd>
            <CompaniesTable
              setOpenFormCompanyDialog={setOpenFormCompanyDialog}
              setCompanyId={setCompanyId}
            />
          </>
        ) : (
          <>
            <StyledTitle>Nenhuma empresa cadastrada!</StyledTitle>
            <StyledButton variant="contained">Adicionar Empresa</StyledButton>
          </>
        )}
      </StyledContext>

      <DialogFormCompany
        open={openFormCompanyDialog}
        onClose={() => setOpenFormCompanyDialog(false)}
        companyId={companyId}
      />
    </StyledContainer>
  )
}

export default Home
