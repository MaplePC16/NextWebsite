import { registerComponent } from "@plasmicapp/react-web/lib/host";
import { Button } from "@mui/material";

export function registerMuiComponents() {
  registerComponent(Button as any, {
    name: "MuiButton",
    importPath: "@mui/material",
    importName: "Button",
    props: {
      children: { type: "slot" },
      variant: {
        type: "choice",
        options: ["text", "outlined", "contained"],
        defaultValue: "contained",
      },
      color: {
        type: "choice",
        options: [
          "inherit",
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
        defaultValue: "primary",
      },
      size: {
        type: "choice",
        options: ["small", "medium", "large"],
        defaultValue: "medium",
      },
      disabled: { type: "boolean", defaultValue: false },
      onClick: { type: "eventHandler", argTypes: [] },
    },
  });
}
