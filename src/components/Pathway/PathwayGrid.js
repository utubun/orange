import React, { useState, useEffect } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { PathwayCard } from "./PathwayCard";
import API from "../../api/"

 const PathwayGrid = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
      API.get('pathways/').then((response) => {
         const result = response.data;
         setData(result);
      });
   }, []);


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