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

export const GET_SHIPS_TYPES = gql(`
  query GetShipsTypes {
    ships {
      type
    }
  }
`);
