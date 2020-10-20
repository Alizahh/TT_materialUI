import React from 'react';
import {Grid} from '@material-ui/core';
// import Header from './header';
// import Content from "./content";
import MenuBar from './menubar';
// import Sample from './sample';
import SimpleTab from './tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
   col:{
    "&.MuiGrid-container": {
        width: '100%',
        display: 'flex',
        flexWrap:' wrap',
        boxSizing:' border-box',
        backgroundColor: '#3d3f4a',
        alignItem:'center',
        justifyContent:'space-around',
        padding:'20px',
    }},
    bg:{
        backgroundColor:'#3d3f4a',
    },
    content:{
        alignItem:'center',
        padding:'20px',
        backgroundColor:'#474a5a',
     
    },
})
const App=()=>{
const classes = useStyle();
    return (
            <Grid container direction="column" >
                {/* <Grid item container /> */}
                <MenuBar />

                <Grid item container className={classes.col}>
                    <Grid className={classes.content} sm={8} >
                            <SimpleTab />
                     </Grid>
             </Grid>
        </Grid>
    );
};
export default App;
// #474a5a