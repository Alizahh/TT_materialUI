import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import List from "./fetch";

const Content=()=>{
    const getcard = obj=>{
        return (
            <Grid item xs={12} sm={4}>
                 <CoffeCard {...obj}/>
            </Grid>
        );
    };
    return(
        <Grid container spacing={2}>
           {List.map(obj=> getcard(obj))}
        </Grid>
    );
};
export default Content;