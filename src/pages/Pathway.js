import React, { useState } from 'react';
import Error from '../components/Error/Error'
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const PathwaySkeleton = () => (
    <Grid 
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
        <Grid item xs={5} ys={5} >
          <Skeleton variant='rectangular' height="100%"  animation="wave" />
        </Grid>

        <Box sx={{ width: 210, marginRight: 0.5, my: 6 }}>
          <Skeleton variant='rectangular' width="100%" height="100%"  animation="wave" />
        </Box>

    </Grid>
)

 export const Pathway = ({ error, loading, data }) => {
    return (
        <>
          { error && <Error /> }
          {
            loading ? <PathwaySkeleton /> : <Box width="300" />
          }
        </>

    )
 }

 export default Pathway;