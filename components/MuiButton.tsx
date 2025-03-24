import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";
import { registerComponent } from "@plasmicapp/react-web/lib/host";

interface MuiButtonProps extends ButtonProps {
  children?: ReactNode;
}

export function MuiButton({ children, ...props }: MuiButtonProps) {
  return <Button {...props}>{children}</Button>;
}

// ✅ Register the MuiButton (Plasmic will recognize it)
registerComponent(MuiButton, {
  name: "MuiButton",
  importPath: "@/components/MuiButton",
  props: {
    variant: {
      type: "choice",
      options: ["text", "outlined", "contained"],
      defaultValue: "text",
    },
    color: {
      type: "choice",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
      defaultValue: "primary",
    },
    size: {
      type: "choice",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
});
