import { gql, useQuery } from '@apollo/client';

const GET_COMPOUND_BY_ID = gql`
  query {
    compounds(where: { id: 'R00001'}) {
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
                chebi
                pubchem
            }
            product {
                id
                name
                alt
                chebi
                pubchem
            }
        }
    }
  }
`