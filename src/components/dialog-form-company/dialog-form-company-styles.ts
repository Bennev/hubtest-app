import { Close } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledDialogHeader = styled.div`
  padding: 0 1.5rem 0 3.4rem;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.darkBlue};
`;

export const StyledDialogTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;

export const StyledClose = styled(Close)`
  &.MuiSvgIcon-root {
    width: 4rem;
    height: 4rem;
    fill: ${props => props.theme.colors.white};
  }
`;