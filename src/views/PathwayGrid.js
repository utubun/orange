import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { PathwayCard } from './PathwayCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { toNativeTypes } from '../utils/utils'

 const PathwayGrid = ({ loading, error, result, records }) => {

    if (loading) {
        return <Loading />
    };

    if (error) {
        return <Error />
    };

    if (result) {

        const entries = records.map((item) => toNativeTypes(item.get('pathway')));

        console.log('After conversion');
        console.log(typeof entries);
        console.log(entries[0])
        
        return (
            <Grid container columns = {3}>
                {
                    entries.map((item) => (
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