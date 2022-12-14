import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Freelance', 159, 6.0, 24, 4.0),
  createData('Jobs', 237, 9.0, 37, 4.3),
  createData('Quizzes', 262, 16.0, 24, 6.0),
  createData('Rewards', 305, 3.7, 67, 4.3),
  createData('Task List', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Tasks</h3>

   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Journey of Success</TableCell>
            <TableCell align="left">Tasks</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Prizes</TableCell>
            <TableCell align="left">Opportunities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}