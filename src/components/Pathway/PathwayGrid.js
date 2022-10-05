import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { PathwayCard } from "./PathwayCard";

 const PathwayGrid = ({ data }) => {

    if (data) {
        
        return (
            <Grid container columns = {3}>
                {
                    data.map((item) => (
                        <Grid.Column key={item.id}>
                            <PathwayCard { ...item } />
                        </Grid.Column>
                        ))
                }
            </Grid>
        )
    } 
 };

export default PathwayGrid;