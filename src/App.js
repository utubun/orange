import './App.css';
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import GeneSearch from './GeneSearch'
import GenesResults from './GenesResults';

const GET_GENES_QUERY = gql`
  query GenesByName($selected: String!) {
    genes (where: { name_CONTAINS: $selected } ) {
      id
      name
      alt
    }}
`;

function App() {

  const [selected, setSelection] = useState("");

  const { loading, error, data } = useQuery(GET_GENES_QUERY, {
    variables: { selected },
  });

  if (error)   return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <GeneSearch   selected = { selected } setSelection = { setSelection } />
      <GenesResults data = { data } selected = { selected } />
    </div>
  );
}

export default App;
