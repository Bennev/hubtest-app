import {
  IconButton,
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import { locations } from './helpers'
import { useState } from 'react'
import {
  StyledTableBodyCell,
  StyledTableContainer,
  StyledTableHeadCell
} from './locations-table-styles'

const LocationsTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

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

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>Local</StyledTableHeadCell>
            <StyledTableHeadCell>Ações</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map(location => (
            <TableRow key={location.id}>
              <StyledTableBodyCell>{location.name}</StyledTableBodyCell>
              <StyledTableBodyCell>
                <IconButton color="inherit">
                  <Edit />
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
              count={locations.length}
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

export default LocationsTable
