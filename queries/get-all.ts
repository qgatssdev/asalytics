import { gql } from 'graphql-request';

export const GET_ALL_USERS = gql`
  query MyQuery {
    asalist {
      results {
        assetId
        available
        logo
        name
        unitname1
      }
    }
  }
`;
