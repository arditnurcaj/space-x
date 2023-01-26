import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

import { ClientProps } from './client.types';

const link = new HttpLink({
  uri: 'https://spacex-production.up.railway.app/',
  fetch,
});

const clientProps: ClientProps = {
  link,
  cache: new InMemoryCache(),
  fetch,
};

export const client = new ApolloClient(clientProps);
