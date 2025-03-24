import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/react-web/lib/host";
import { registerMuiButton } from "../components/plasmic/registerMuiButton"; // ✅ Correct Path

registerMuiButton(); // ✅ Register the MUI Button for Plasmic

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
