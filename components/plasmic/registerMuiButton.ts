import { registerComponent } from "@plasmicapp/react-web/lib/host";
import { MuiButton } from "../MuiButton";

export function registerMuiButton() {
  registerComponent(MuiButton, {
    name: "MuiButton",
    importPath: "../components/MuiButton",
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
      onClick: {
        type: "eventHandler",
        argTypes: [],
      },
      children: {
        type: "slot",
        defaultValue: "Click Me",
      },
    },
  });
}
