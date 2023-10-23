import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { useRetrieveEntry } from "../../hooks";

export default function EntryDetail(props) {
  const [entry, loading] = useRetrieveEntry(props.id);

  if (Object.keys(entry).length === 0 && loading) return <>Loading...</>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <h1>Field</h1>
            </TableCell>
            <TableCell align="center">
              <h1>Value</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Name
            </TableCell>
            <TableCell align="center">{entry.name}</TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Company
            </TableCell>
            <TableCell align="center">{entry.company}</TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Person to Meet
            </TableCell>
            <TableCell align="center">{entry.personToMeet}</TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Phone
            </TableCell>
            <TableCell align="center">{entry.mobile}</TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Purpose
            </TableCell>
            <TableCell align="center">{entry.purpose}</TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Date
            </TableCell>
            <TableCell align="center">
              {new Date(entry.date).toLocaleDateString()}
            </TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              In
            </TableCell>
            <TableCell align="center">
              {new Date(entry.in).toLocaleTimeString()}
            </TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Sign
            </TableCell>
            <TableCell align="center">{entry.sign}</TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Out
            </TableCell>
            <TableCell align="center">
              {new Date(entry.out).toLocaleTimeString()}
            </TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Security Sign
            </TableCell>
            <TableCell align="center">{entry.securitySign}</TableCell>
          </TableRow>
          <TableRow
            sx={{ "&:last-child td, &:laspait-child th": { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              Remarks
            </TableCell>
            <TableCell align="center">{entry.remarks}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
