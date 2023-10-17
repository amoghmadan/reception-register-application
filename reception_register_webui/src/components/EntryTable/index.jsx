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
    "Serial Number",
    "Name",
    "Phone",
    "Person to Meet",
    "Company",
    "Purpose",
    "In",
    "Sign",
    "Out",
    "Security Sign",
    "Remarks",
  ];

  if (loading) return <>Loading...</>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" key={column}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {entryList.length === 0 ? (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" colSpan={columns.length}>
                No Content
              </TableCell>
            </TableRow>
          ) : (
            entryList.map((row, index) => {
              return (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.mobile}</TableCell>
                  <TableCell align="center">{row.personToMeet}</TableCell>
                  <TableCell align="center">{row.company}</TableCell>
                  <TableCell align="center">{row.purpose}</TableCell>
                  <TableCell align="center">
                    {new Date(row.in).toLocaleTimeString()}
                  </TableCell>
                  <TableCell align="center">{row.sign}</TableCell>
                  <TableCell align="center">
                    {row.out ? new Date(row.out).toLocaleTimeString() : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {row.securitySign || "-"}
                  </TableCell>
                  <TableCell align="center">{row.remarks || "-"}</TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
