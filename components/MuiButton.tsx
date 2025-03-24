import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface MuiButtonProps extends ButtonProps {
  children?: ReactNode;
}

export function MuiButton({ children, ...props }: MuiButtonProps) {
  return <Button {...props}>{children}</Button>;
}
