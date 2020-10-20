import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  border:{
   borderRadius:'0',
   
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

noshadow:{
  "& .MuiPaper-elevation1":{
    boxShadow: 'none',
}
},
  table: {
    minWidth: 650,
    backgroundColor:'#3d3f4a',
    "& .MuiPaper-elevation1":{
      boxShadow: 'none',
  }
  },
  head:{
    "& .MuiTableHead-root":{
      display: 'table-header-group',    
  },
  backgroundColor:" #474a5a",
},
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
},
rowheight:{
  height:'40%',
  padding:'0',

},

}));

function createData(name, age, level, energy, amount,actions1,actions2) {
  return { name, age, level, energy, amount,actions1,actions2 };
}

const rows = [
  createData('101', 101, 101, '89%', '89%', 'Edit','Delete'),
  createData('102', 102, 102, '89%', '89%', 'Edit','Delete'),
  createData('103', 103, 103, '89%', '89%', 'Edit',' Delete'),
  createData('104', 104,104, '11%', '11%', 'Edit ','Delete'),
  createData('105', 105, 105, '11%', '11%', 'Edit','Delete'),
];

const BasicTable=()=> {
  const classes = useStyle();
  let myPaddingStyle = {
    paddingTop: 10,
    paddingBottom: 10,
}

  return (
    <TableContainer component={Paper} className={classes.border}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell style={{color:'#86878b'}} >ID</TableCell>
            <TableCell style={{color:'#86878b'}} align="right">Age</TableCell>
            <TableCell style={{color:'#86878b'}} align="right">Level</TableCell>
            <TableCell style={{color:'#86878b'}} align="right">Energy</TableCell>
            <TableCell style={{color:'#86878b'}} align="right">Amount</TableCell>
            <TableCell style={{color:'#86878b'}} align="right">Actions</TableCell>
            <TableCell style={{color:'#86878b'}} align="right"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.spacing}>
              <TableCell style={{color:'#86878b'}} component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell align="right" style={{color:'#86878b', textAlign:'center'}}>{row.age}</TableCell>
              <TableCell align="right" style={{color:'#86878b', textAlign:'center'}}>{row.level}</TableCell>
              <TableCell align="right" style={{color:'#86878b', textAlign:'center'}}>{row.energy}</TableCell>
              <TableCell align="right" style={{color:'#86878b', textAlign:'center'}}>{row.amount}</TableCell>
              <TableCell align="right" style={{color:'green', textAlign:'center'}}> {row.actions1}</TableCell>
              <TableCell align="right" style={{color:'red', textAlign:'left'}}> {row.actions2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;