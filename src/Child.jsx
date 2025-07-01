import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from "@mui/material";

function Child({ products }) {
  const theme = useTheme(); // ניגשת לצבעים מהערכת העיצוב
const colorChoice=theme.palette.secondary.main;
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 4,
        maxWidth: 600,
        marginX: "auto",
        border: `2px solid ${colorChoice}`,
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#fdf7ff" }}>
            <TableCell align="center" sx={{ color: colorChoice }}>
              <strong> Name</strong>
            </TableCell>
            <TableCell align="center" sx={{ color: colorChoice }}>
              <strong>Price</strong>
            </TableCell>
            <TableCell align="center" sx={{ color: colorChoice }}>
              <strong>Color</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell align="center" sx={{ color: colorChoice }}>
                {product.Pname}
              </TableCell>
              <TableCell align="center" sx={{ color: colorChoice }}>
                {product.Pprice}
              </TableCell>
              <TableCell align="center" sx={{ color: colorChoice }}>
                {product.Pcolor}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Child;