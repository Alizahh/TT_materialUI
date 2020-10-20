import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography } from "@material-ui/core"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import BasicTable from './one';
import BasicTableTwo from './two';
import BasicTableThree from './three';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AlerDialogue from './modal';

const useStyle = makeStyles((theme) => ({
  root1:{
    backgroundColor:'#474a5a',
  },
  root: {
    flexGrow: 1,
    backgroundColor: '#3d3f4a',
    justifyContent:'center',
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
    color: '#fff',
    fontSize:'12px',
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

flexContainer:{
  //by default class setting is done by using &.
  "& .MuiTabs-flexContainer":{
    justifyContent: 'center',
    display:'flex',
    fontSize:'18px',
    // width: '60%',
    
  }
  // searchIcon:
  },
//   color:'#fff',
// },
search:{
  position: 'relative',
  borderRadius: '4px',
  backgroundColor:'#3d3f4a',
  justifyContent:'sapce-around',
  margin: '0 20px 0 0',
  height:'fit-content',
  display:'flex',
},
searchIcon:{
  height: '100%',
  display: 'flex',
  padding: '0px 16px',
  position: 'absolute',
  alignItems: 'center',
  pointerEvents: 'none',
  justifyContent:' center',
},

dir:{
display:'flex',
},
gutters:{
  paddingRight: '16px',
},
color:{
  color:'#fff',
  cursor:' text',
  display: 'inline-flex',
  position: 'relative',
  fontSize: '18px',
  boxSizing: 'border-box',
  alignItems: 'center',
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: '400',
  lineHeight: '1.1876em',
  letterSpacing: '0.00938em',
  marginTop: '6px',
},
scroller:{
  "& .PrivateTabIndicator-colorSecondary-19 ":{
    backgroundColor: '#fff',
},
border:{
  boxShadow:'none',
  
},
}
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const SimpleTabs= ()=> {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root1}>
      <AppBar position="static" className={classes.root} >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.flexContainer} indicatorColor={'white'} >
          <Tab style={{fontSize:'12px'}} label="Marketplace" {...a11yProps(0)} />
          <Tab style={{fontSize:'12px'}} label="Transaction History" {...a11yProps(1)} />                                        //works
          <Tab style={{fontSize:'12px'}} label="Users" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <br/>
      <TabPanel value={value} index={0}>
     <div className={classes.dir} style={{justifyContent:'space-between'}}>
           <div style={{display:'flex'}}>
            <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon className={classes.color}/> 
          </div>
            <div className={classes.search}>
            <InputBase
              placeholder="Fish…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <ExpandMoreIcon className={classes.color}/>
          </div>
          </div>
          <div style={{justifyContent:'center'}}>  
            <AlerDialogue />
          </div>
     </div>
     <br/>
        <BasicTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.dir}>
            <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon className={classes.color}/> 
          </div>
            
     </div>
        <br />
        <BasicTableTwo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.dir}>
            <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon className={classes.color}/> 
          </div>
     </div>
     <br/>
        <BasicTableThree/>
      </TabPanel>
    </div>
  );
};
export default SimpleTabs;