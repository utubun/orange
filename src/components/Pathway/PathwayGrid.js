import React, { useState, useEffect } from 'react';
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import PreviewPathway from "./PathwayCard";
import API from "../../api/"

 const PathwayGrid = () => {

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
      API.get('pathways/')
        .then((response) => {

            if (response.status !== 200) {
                throw new Error('Error')
            }

            console.log(response)
            
            setData(response.data);

            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setData(null);
        })
        .finally(() => {
            setLoading(false);
        });
   }, []);


   return (
    <>
        {
            data.map((item) => (
                <div key={item.id}>
                    <PreviewPathway { ...item } />
                </div>
            ))
        }
    </>
    )
 };

export default PathwayGrid;