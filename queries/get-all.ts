import { gql } from 'graphql-request';

export const GET_ALL_USERS = gql`
  query MyQuery {
    asalist {
      results {
        available
        logo
        name
      }
    }
  }
`;
