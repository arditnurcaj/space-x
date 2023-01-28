import { Ship } from '@/lib/generated/graphql';

export interface ShipsListProps {
  entries?: (Ship | null)[] | null | undefined;
}
