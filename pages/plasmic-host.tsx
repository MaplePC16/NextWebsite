// plasmic-host.tsx
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/react-web/lib/host';
import { registerMuiComponents } from '../mui-components-config'; 
// ^ Make sure this path is correct

// Register all MUI components first
registerMuiComponents();

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
