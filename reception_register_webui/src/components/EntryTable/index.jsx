import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { ListEntryContext } from "../../state/context/ListEntryProvider";

export default function EntryTable() {
  const { entryList, loading } = useContext(ListEntryContext);
  const columns = [
    "ID",
    "Name",
    "Phone",
    "Person to Meet",
    "Company",
    "Purpose",
  ];

  if (loading) return <>Loading...</>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              <TableCell align="right" key={column}>
                {column}
              </TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {entryList.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{index + 1}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.personToMeet}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.purpose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
