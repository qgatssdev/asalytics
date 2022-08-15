import { gql } from 'graphql-request';

export const GET_ALL_USERS = gql`
  query MyQuery {
    asalist {
      result {
        available
        logo
        name
      }
    }
  }
`;
