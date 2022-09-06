import './App.css';
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Search from './components/Search';
import CompoundSearchResult from './components/CompoundSearchResult';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

const GET_CPD_QUERY = gql`
  query CompoundsByName($selected: String!) {
    compounds (where: { name_CONTAINS: $selected } ) {
      id
      name
      alt
      chebi
      pubchem
      reaction {
        id
        direction
        equation
        substrate {
          id
          name
          alt
        }
        product {
          id
          name
          alt
        }
      }
      module {
        id
        name
      }
      }
    }
`;

const data = {
  "nodes": [ 
      { 
        "id": "id1",
        "name": "name1",
        "val": 1 
      },
      { 
        "id": "id2",
        "name": "name2",
        "val": 10 
      },
      { 
        "id": "id3",
        "name": "name3",
        "val": 5
      },
  ],
  "links": [
      {
          "source": "id1",
          "target": "id2"
      },
      {
        "source": "id3",
        "target": "id1"
      }
  ]
}

function App() {

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  }

  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'ATP');

  const { loading, error, data, } = useQuery(GET_CPD_QUERY, {
    variables: { selected: searchTerm },
  });





  if (error)   return <p>{error}</p>;
  if (loading) return <p>Loading data...</p>;


  return (
    <>
      <Search value={searchTerm} onSearch = { handleSearch } />
      <CompoundSearchResult data = { data } selected = { 'ATP' } />
    </>
  );
}

export default App;
