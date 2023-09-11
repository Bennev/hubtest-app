import { TextField } from '@mui/material'
import { StyledContainer, StyledLabel } from './custom-textfield-styles'

type TCustomTextFieldProps = {
  label: string
}

const CustomTextField = ({ label }: TCustomTextFieldProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <TextField variant="outlined" color="info" focused />
    </StyledContainer>
  )
}

export default CustomTextField
