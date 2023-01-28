import { gql } from '@/lib/generated/gql';

export const GET_SHIPS = gql(`
  query GetShips {
    ships {
      id
      image
      type
      year_built
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
