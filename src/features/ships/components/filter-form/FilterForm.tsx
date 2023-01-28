import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Select,
} from '@chakra-ui/react';

import { FilterFormProps } from './FilterForm.types';

import { GET_SHIPS_TYPES } from '@/features/ships/queries/ships.graphql';

const FilterForm = (props: FilterFormProps): JSX.Element => {
  const { btnRef, isOpen, onClose, onSubmit } = props;

  const { data, loading, error } = useQuery(GET_SHIPS_TYPES);

  const [formState, setFormState] = useState({ type: '' });

  const shipTypes = useMemo(() => {
    const tempTypes = new Set<string>();

    data?.ships?.forEach((ship) => {
      ship?.type && tempTypes.add(ship.type);
    });

    return [...tempTypes];
  }, [data]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ type: formState.type });
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormState({ type: e.target.value });
  };

  if (error) return <Box>Error loading form data!</Box>;

  return (
    <Drawer
      size='md'
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />

      <form data-testid='filter-form' onSubmit={handleSubmit}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter ships</DrawerHeader>

          <DrawerBody>
            <Select
              placeholder='Select ship type'
              value={formState.type}
              onChange={handleChange}
              disabled={loading}
              data-testid='select-ship-type-input'
            >
              {shipTypes?.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button type='submit' data-testid='submit-btn' colorScheme='blue'>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
};

export default FilterForm;
