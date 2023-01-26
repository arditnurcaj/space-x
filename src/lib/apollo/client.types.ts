import { HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

export interface ClientProps {
  link: HttpLink;
  cache: InMemoryCache;
  fetch?: typeof fetch;
}
