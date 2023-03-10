import { useMemo, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';

import {
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { IoGridOutline, IoListOutline, IoFilter } from 'react-icons/io5';

import { CustomSpinner } from '@/components';
import {
  FilterForm,
  ShipsList,
  ShipsGallery,
} from '@/features/ships/components';

import { LayoutView } from './Ships.types';

import { GET_SHIPS } from '@/features/ships/queries/ships.graphql';

const Ships = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading, error } = useQuery(GET_SHIPS);

  const btnRef = useRef<HTMLButtonElement>(null);

  const [selectedView, setSelectedView] = useState(LayoutView.LIST);
  const [shipsType, setShipsType] = useState('');

  const toggleDrawerVisibility = () => {
    isOpen ? onClose() : onOpen();
  };

  const filteredShips = useMemo(() => {
    if (shipsType === '') return data?.ships;

    return data?.ships?.filter((ship) => ship?.type === shipsType);
  }, [data, shipsType]);

  if (loading) return <CustomSpinner />;

  if (error) return <Box>Unexpected error, please refresh!</Box>;

  return (
    <>
      <Flex alignItems='center' justifyContent='space-between'>
        <Heading as='h2' size='lg'>
          Ships
        </Heading>

        <Flex alignItems='center'>
          {Object.values(LayoutView).map((view, index) => (
            <IconButton
              key={index}
              isActive={selectedView === view}
              data-testid={view}
              cursor='pointer'
              aria-label='view-button'
              padding='2'
              icon={
                view === LayoutView.LIST ? <IoListOutline /> : <IoGridOutline />
              }
              onClick={() => setSelectedView(view)}
              ml={2}
            />
          ))}
        </Flex>

        <IconButton
          ref={btnRef}
          onClick={toggleDrawerVisibility}
          cursor='pointer'
          data-testid='filter-btn'
          aria-label='filter-icon-button'
          padding='2'
          ml='3'
          icon={<IoFilter />}
        />
      </Flex>

      {selectedView === LayoutView.LIST ? (
        <ShipsList entries={filteredShips} />
      ) : (
        <ShipsGallery entries={filteredShips} />
      )}

      <FilterForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={(data) => {
          toggleDrawerVisibility();
          setShipsType(data.type);
        }}
        btnRef={btnRef}
      />
    </>
  );
};

export default Ships;
