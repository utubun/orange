import './App.css';
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import GeneSearch from './GeneSearch'
import GenesResults from './GenesResults';

const GET_ORGANISMS_QUERY = gql`
  {
    organisms {
      id
      name
      genes {
        id
        name
      }
    }
  }
`;

function App() {

  const [selected, setSelection] = useState('All');

  const { loading, error, data } = useQuery(GET_ORGANISMS_QUERY);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  console.log(JSON.stringify(data, null, 2));

  return (
    <div>
      <GeneSearch   selected = { selected } setSelection = { setSelection } />
      <GenesResults data = { data } selected = { selected } />
    </div>
  );
}

export default App;
