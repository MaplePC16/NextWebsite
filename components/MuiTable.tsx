import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { registerComponent } from "@plasmicapp/react-web/lib/host";

interface MuiTableProps {
  rows: { id: number; name: string; price: string }[];
}

export function MuiTable({ rows }: MuiTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// ✅ Self-register with 'section' for organization in Plasmic Studio
registerComponent(MuiTable, {
    name: "MuiTable",
    importPath: "@/components/MuiTable",
    section: "Data Display",  // Move this directly under the root, not inside 'meta'
    props: {
      rows: {
        type: "array",
        description: "Table data",
        defaultValue: [
          { id: 1, name: "Product A", price: "$100" },
          { id: 2, name: "Product B", price: "$200" },
        ],
      },
    },
  });
  
