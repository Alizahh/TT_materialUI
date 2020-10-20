import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor:'#3d3f4a',
  },
  border:{
    borderRadius:'0',
 },
 head:{
  "&.MuiTableHead-root":{
    display: 'table-header-group',
    backgroundColor:" #474a5a",
}},
spacing:{
  "& .MuiTableCell-root": {
     display: 'table-cell',
     padding: '16px',
     fontSize: '0.875rem',
     textAlign: 'center',
     fontWeight: '400',
     lineHeight: '1.43',
     borderBottom: '14px solid #474a5a',
     borderTop: '2px solid #474a5a',
     letterSpacing: '0.01071em',
     verticalAlign: 'inherit',
 }},
});

function createData( name,TTBalance,WalletBalance,Email,Action) {
  return {name, TTBalance,WalletBalance,Email,Action };
}

const rows = [
  createData('Maaz', 1000,1000,'maaz@gmail.com', 'Remove'),
  createData('Saad', 1000, 1000, 'saad@gmail.com', 'Remove'),
  createData('Ali', 1000, 1000, 'ali@gmail.com', 'Remove'),
  createData('Zain',1000,1000,'zain@gmail.com', 'Remove'),
];

const BasicTableThree=()=> {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.border}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  className={classes.head}>
          <TableRow>
            <TableCell style={{color:'#86878b'  , textAlign:'center'}} >Name</TableCell>
            <TableCell  style={{color:'#86878b'  , textAlign:'center'}} align="right">TT Balance</TableCell>
            <TableCell style={{color:'#86878b'  , textAlign:'center'}}  align="right">Wallet Balance</TableCell>
            <TableCell  style={{color:'#86878b'  , textAlign:'center'}} align="right">Email</TableCell>
            <TableCell  style={{color:'#86878b'  , textAlign:'center'}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  style={{color:'#86878b'}} key={row.name} className={classes.spacing}>
              <TableCell style={{color:'#86878b'}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  style={{color:'#86878b'}} align="right">{row.TTBalance}</TableCell>
              <TableCell  style={{color:'#86878b'}} align="right">{row.WalletBalance}</TableCell>
              <TableCell  style={{color:'#86878b'}} align="right">{row.Email}</TableCell>
              <TableCell  style={{color:'#86878b'}} align="right">{row.Action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTableThree;