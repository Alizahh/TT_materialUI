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
  border:{
    borderRadius:'0',
 },
 head:{
  "&.MuiTableHead-root":{
    display: 'table-header-group',
    backgroundColor:" #474a5a",
}},
});

function createData(name, Token, TxHash,type,amount,time) {
  return {name, Token, TxHash,type,amount,time };
}

const rows = [
  createData('Maaz','DYT', 'Osxf..ascasdWE', 'Mint', 500, '0/18/2020 12:40'),
  createData('Saad','DYT', 'Osxf..ascasdWE', 'Withdraw', 500, '0/18/2020 12:40'),
  createData('Ali', 'DYT', 'Osxf..ascasdWE', 'Mint', 500, '0/18/2020 12:40'),
  createData('Yasir','DYT', 'Osxf..ascasdWE','Withdraw',5003, '0/18/2020 12:40'),
];

const BasicTableTwo=()=> {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.border}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  className={classes.head}>
          <TableRow>
            <TableCell style={{color:'#86878b'}}>Name</TableCell>
            <TableCell style={{color:'#86878b' , textAlign:'center'}} align="right">Token</TableCell>
            <TableCell style={{color:'#86878b' , textAlign:'center'}} align="right">Tx Hash</TableCell>
            <TableCell style={{color:'#86878b' , textAlign:'center'}} align="right">Type</TableCell>
            <TableCell style={{color:'#86878b' , textAlign:'center'}} align="right">Amount</TableCell>
            <TableCell style={{color:'#86878b' , textAlign:'center'}} align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.spacing}>
              <TableCell component="th" scope="row" style={{color:'#86878b'}}>
                {row.name}
              </TableCell>
              <TableCell style={{color:'#86878b'}} align="right">{row.Token}</TableCell>
              <TableCell style={{color:'#86878b'}} align="right">{row.TxHash}</TableCell>
              <TableCell style={{color:'#86878b'}} align="right">{row.type}</TableCell>
              <TableCell style={{color:'#86878b'}} align="right">{row.amount}</TableCell>
          <TableCell style={{color:'#86878b'}} align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTableTwo;