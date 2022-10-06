import React, { useState, useEffect } from 'react';
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
            <div>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            <PathwayCard { ...item } />
                        </div>
                        ))
                }
            </div>
        )
    } 
 };

export default PathwayGrid;