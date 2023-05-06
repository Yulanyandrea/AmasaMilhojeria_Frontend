import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql `
  query {
    milhojas {
      taste
    }
  }
`

export default GET_PRODUCTS;
