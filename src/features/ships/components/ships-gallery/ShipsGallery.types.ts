import { Ship } from '@/lib/generated/graphql';

export interface ShipsGallerysProps {
  entries?: (Ship | null)[] | null | undefined;
}
