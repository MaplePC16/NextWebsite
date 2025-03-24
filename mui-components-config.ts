import { registerComponent } from "@plasmicapp/react-web/lib/host";
import {
  Button,
  TextField,
  Checkbox,
  Select,
  AppBar,
  Grid,
  Container,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Snackbar,
  Dialog,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

export function registerMuiComponents() {
  // BUTTON
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

  // TEXT FIELD
  registerComponent(TextField as any, {
    name: "MuiTextField",
    importPath: "@mui/material",
    importName: "TextField",
    props: {
      label: { type: "string", defaultValue: "" },
      variant: { type: "choice", options: ["outlined","filled","standard"], defaultValue: "outlined" },
      value: { type: "string", defaultValue: "" },
      placeholder: { type: "string", defaultValue: "" },
      required: { type: "boolean", defaultValue: false },
      disabled: { type: "boolean", defaultValue: false },
      onChange: { type: "eventHandler", argTypes: [] },
    },
  });

  // CHECKBOX
  registerComponent(Checkbox as any, {
    name: "MuiCheckbox",
    importPath: "@mui/material",
    importName: "Checkbox",
    props: {
      checked: { type: "boolean", defaultValue: false },
      disabled: { type: "boolean", defaultValue: false },
      onChange: { type: "eventHandler", argTypes: [] },
    },
  });

  // SELECT
  registerComponent(Select as any, {
    name: "MuiSelect",
    importPath: "@mui/material",
    importName: "Select",
    props: {
      value: { type: "string", defaultValue: "" },
      multiple: { type: "boolean", defaultValue: false },
      disabled: { type: "boolean", defaultValue: false },
      children: { type: "slot" },
      onChange: { type: "eventHandler", argTypes: [] },
    },
  });

  // LAYOUT
  registerComponent(AppBar as any, {
    name: "MuiAppBar",
    importPath: "@mui/material",
    importName: "AppBar",
    props: { children: { type: "slot" }, position: { type: "choice", options: ["fixed","static","relative"], defaultValue: "static" } },
  });
  registerComponent(Grid as any, {
    name: "MuiGrid",
    importPath: "@mui/material",
    importName: "Grid",
    props: { container: { type: "boolean", defaultValue: false }, item: { type: "boolean", defaultValue: false }, spacing: { type: "number", defaultValue: 2 }, children: { type: "slot" } },
  });
  registerComponent(Container as any, {
    name: "MuiContainer",
    importPath: "@mui/material",
    importName: "Container",
    props: { maxWidth: { type: "choice", options: ["xs","sm","md","lg","xl"], defaultValue: "lg" }, children: { type: "slot" } },
  });
  registerComponent(Paper as any, {
    name: "MuiPaper",
    importPath: "@mui/material",
    importName: "Paper",
    props: { elevation: { type: "number", defaultValue: 1 }, children: { type: "slot" } },
  });
  registerComponent(Typography as any, {
    name: "MuiTypography",
    importPath: "@mui/material",
    importName: "Typography",
    props: { variant: { type: "choice", options: ["h1","h2","h3","h4","h5","h6","body1","body2"], defaultValue: "body1" }, children: { type: "slot" } },
  });

  // TABLES
  ["Table","TableHead","TableBody","TableRow","TableCell"].forEach((comp) =>
    registerComponent((({ Table, TableHead, TableBody, TableRow, TableCell }) => ({ Table, TableHead, TableBody, TableRow, TableCell })[comp] as any), {
      name: `Mui${comp}`,
      importPath: "@mui/material",
      importName: comp,
      props: { children: { type: "slot" } },
    })
  );

  // FEEDBACK
  registerComponent(Snackbar as any, {
    name: "MuiSnackbar",
    importPath: "@mui/material",
    importName: "Snackbar",
    props: { open: { type: "boolean", defaultValue: false }, message: { type: "string", defaultValue: "" }, onClose: { type: "eventHandler", argTypes: [] } },
  });
  registerComponent(Dialog as any, {
    name: "MuiDialog",
    importPath: "@mui/material",
    importName: "Dialog",
    props: { open: { type: "boolean", defaultValue: false }, onClose: { type: "eventHandler", argTypes: [] }, children: { type: "slot" } },
  });

  // SURFACES
  registerComponent(Card as any, {
    name: "MuiCard",
    importPath: "@mui/material",
    importName: "Card",
    props: { children: { type: "slot" } },
  });
  registerComponent(CardHeader as any, {
    name: "MuiCardHeader",
    importPath: "@mui/material",
    importName: "CardHeader",
    props: { title: { type: "string", defaultValue: "" } },
  });
  registerComponent(CardContent as any, {
    name: "MuiCardContent",
    importPath: "@mui/material",
    importName: "CardContent",
    props: { children: { type: "slot" } },
  });
}
