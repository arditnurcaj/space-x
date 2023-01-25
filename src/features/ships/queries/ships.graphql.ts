import { gql } from '@/lib/generated/gql';

export const GET_SHIPS = gql(`
  query GetShips {
    ships {
      id
      image
      status
      type
      weight_kg
      year_built
      model,
      name
    }
  }
`);
