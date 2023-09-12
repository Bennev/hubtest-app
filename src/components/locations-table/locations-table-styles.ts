import { TableCell, TableContainer } from "@mui/material";
import styled from "styled-components";

export const StyledTableContainer = styled(TableContainer)`
  &.MuiTableContainer-root{
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledTableHeadCell = styled(TableCell)`
  &.MuiTableCell-root {
    padding: 2rem 4rem;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${props => props.theme.colors.black};
    font-family: 'Poppins';
  }
`;

export const StyledTableBodyCell = styled(TableCell)`
  &.MuiTableCell-root {
    padding: 2rem 4rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.theme.colors.black};
    font-family: 'Poppins';
  }

  .MuiIconButton-root {
    .MuiSvgIcon-root {
      width: 2.28rem;
      height: 2.28rem;
    }
  }
`;