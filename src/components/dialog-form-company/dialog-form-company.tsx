import { IconButton } from '@mui/material'
import {
  StyledClose,
  StyledDialog,
  StyledDialogHeader,
  StyledDialogTitle
} from './dialog-form-company-styles'

type TDialogFormCompanyProps = {
  companyId?: string
  open: boolean
  onClose: () => void
}

const DialogFormCompany = ({
  companyId,
  open,
  onClose
}: TDialogFormCompanyProps) => {
  return (
    <StyledDialog open={open} maxWidth="md">
      <StyledDialogHeader>
        <StyledDialogTitle>
          {companyId ? 'Editar empresa' : 'Adicionar empresa'}
        </StyledDialogTitle>
        <IconButton onClick={() => onClose()}>
          <StyledClose />
        </IconButton>
      </StyledDialogHeader>
    </StyledDialog>
  )
}

export default DialogFormCompany
