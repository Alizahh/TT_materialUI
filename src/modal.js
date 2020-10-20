import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SignIn from './input';

const AlertDialog=()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const useStyle=makeStyles({
    innerdiv:{
      justifyContent:'center',
      maxWidth: '600px',
    backgroundColor:'#3d3f4a',
    padding:' 8px 24px',
    color:'#a0a1a4',
    borderColor:'#a0a1a4'
    },
    action:{
      fontSize:' 8px',
      minWidth: '80px',
      boxSizing: 'border-box',
      lineHeight: '1.75',
      borderRadius:' 0px',
      borderColor: '#3d3f4a',
      letterSpacing: '0.02857em',
      color: '#a6a7a8',
      paddinh:'none',
      backgroundColor: '#474a5a',
    },
    Button:{
      padding:'20px 0px 40px 40px',
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'start',
      color: '#a0a1a4',
      backgroundColor: '#3d3f4a',
    },
    btn:{
      // padding: '5px 15px',
      color: '#a6a7a8',
      border: '1px solid #3d3f4a',
      backgroundColor: '#3d3f4a',
      textTransform: 'lowercase',
      fontSize: '10px',
      fontWeight: '500',
      lineHeight: '1.75',
      borderRadius: '15px',
      letterSpacing: '0.02857em',
    },
   
  });

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle();
  return (
    
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.btn}>
        Add item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{marginLeft:'30%', marginRight:'30%', boxShadow:'none',
        color:'#a0a1a4',
        borderRadius:'none',borderColor: '#3d3f4a', fontSize:'12px'}}
        >
        <DialogContent className={classes.innerdiv} >
          <SignIn/>
        </DialogContent>
        <DialogActions className={classes.Button}>
          <Button onClick={handleClose} className={classes.action}>
           Cancel
          </Button>
          <Button onClick={handleClose} className={classes.action}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog;
