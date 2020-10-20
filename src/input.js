import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import img from './img.png';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


  const useStyles = makeStyles((theme) => ({
 
    field:{
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: '#a0a1a4',
    },
   
      "& .PrivateNotchedOutline-root-55": {
        top: '-5px',
       fontSize: '10px',
        left: '0',
        right: '0',
        bottom: '0',
        margin:' -5px 0px 0px 0px',
       padding:'10px',
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: '#a0a1a4',
        borderWidth: '2px',
        borderRadius: '0px',
        height: '30%',
        width:'70%',
        height:'45%',
    },
    "& .MuiInputBase-input":{
      font: 'inherit',
      color: 'currentColor',
      width: '100%',
      border: '0',
      height: '1.1876em',
      margin:' 0',
      fontSize: '10px',
      display: 'block',
      minWidth: '0',
      background: 'none',
    },
    display:'flex',
    "& .MuiOutlinedInput-input": {
      padding:'3px',
      borderRadius: '0px',
      color:'#a0a1a4',
  },
 
  },

    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      "& .MuiPaper-elevation1":{
        boxShadow:'none',
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      display:'flex',
      flexDirection:"column",
    },
    flexclass:{
      display:'flex',
      justifyContent:'center',
    },
   
  }));
  
  export default function SignIn() {
    const classes = useStyles();
  
    return (
      <Container className={classes.paper}component="main" maxWidth="30%" >
        <div style={{justifyContent:'start',backgroundColor:'#3d3f4a'}}>
            <img src={img} alt={''} style={{height:'80px', width:'80px'}}/>
          </div>
         
          <form className={classes.form} noValidate>
            <div className={classes.field}>
           <div style={{justifyContent:'center'}}>
             <h4>id</h4>
            <TextField
              variant="outlined"
              margin="2px"
              id="number"
              value="101"
              name="id"
              alignItems="center"
              
            />
            </div>
            <div>
              <h4>level</h4>
            <TextField
              variant="outlined"
              margin="2px"
              id="number"
              value="101"
              name="id"
              autoFocus
            />
            </div>
            </div><br/>
            <div className={classes.field}>
            <div>
             <h4> amount</h4>
              <TextField
              variant="outlined"
              margin="2px"
              id="number"
              value="101"
              name="id"
              autoFocus
            />
            </div>
            <div>
             <h4>Energy</h4> 
            <TextField
              variant="outlined"
              margin="2px"
              id="number"
              value="101"
              name="id"
              autoFocus
            />
            </div>
            </div> <br/>
            <div className={classes.field} style={{justifyContent:'start'}}>
            <div>
              <h4>age</h4>
            <TextField
              variant="outlined"
              margin="2px"
              name="age"
              value="age"
              type="String"
              id="string"
            />
            </div>
            </div>
          </form>
      </Container>
    );
  }