import {
  IconButton,
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'
import { Edit, Store, Delete } from '@mui/icons-material'
import { companies } from './helpers'
import { Dispatch, SetStateAction, useState } from 'react'
import {
  StyledTableBodyCell,
  StyledTableContainer,
  StyledTableHeadCell
} from './companies-table-styles'
import { useNavigate } from 'react-router-dom'

type TCompaniesTableProps = {
  setOpenFormCompanyDialog: Dispatch<SetStateAction<boolean>>
  setCompanyId: Dispatch<SetStateAction<string>>
}

const CompaniesTable = ({
  setOpenFormCompanyDialog,
  setCompanyId
}: TCompaniesTableProps) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const navigate = useNavigate()

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleOpenFormCompanyDialog = (companyId: string) => {
    setCompanyId(companyId)
    setOpenFormCompanyDialog(true)
  }

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>Empresa</StyledTableHeadCell>
            <StyledTableHeadCell>Qt de Locais</StyledTableHeadCell>
            <StyledTableHeadCell>Ações</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map(company => (
            <TableRow key={company.id}>
              <StyledTableBodyCell>{company.name}</StyledTableBodyCell>
              <StyledTableBodyCell>
                {company.locationQuantity}
              </StyledTableBodyCell>
              <StyledTableBodyCell>
                <IconButton
                  color="inherit"
                  onClick={() => handleOpenFormCompanyDialog(company.id)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => navigate('/home/company')}
                >
                  <Store />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </StyledTableBodyCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 15, 30]}
              colSpan={3}
              count={companies.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage="Linhas por página"
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} de ${count}`
              }
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </StyledTableContainer>
  )
}

export default CompaniesTable
