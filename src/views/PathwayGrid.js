import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { PathwayCard } from './PathwayCard';
import Loading from '../components/Loading';
import Error from '../components/Error';

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