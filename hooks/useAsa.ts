import { useQuery } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

import { GET_ALL_USERS } from '../queries/get-all';

const endpoint = 'https://analytics-api.herokuapp.com/analytics';
//
export function useAsa() {
  const client = new GraphQLClient(endpoint);

  return useQuery(['Asas'], async () => {
    const { asalist } = await client.request(GET_ALL_USERS);
    return asalist;
  });
}
