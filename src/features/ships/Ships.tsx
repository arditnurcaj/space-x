import { useRef, useState } from 'react';

import { Flex, Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { IoGridOutline, IoListOutline, IoFilter } from 'react-icons/io5';

import { MainLayout } from '@/layouts';

import { FilterForm, ShipsList, ShipsGallery } from './components';

import { LayoutView } from './Ships.types';

const Ships = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const [selectedView, setSelectedView] = useState(LayoutView.LIST);

  const toggleDrawerVisibility = () => {
    isOpen ? onClose() : onOpen();
  };

  return (
    <MainLayout>
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
          aria-label='gallery-icon-button'
          padding='2'
          ml='3'
          icon={<IoFilter />}
        />
      </Flex>

      {selectedView === LayoutView.LIST ? <ShipsList /> : <ShipsGallery />}

      <FilterForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={(data) => {
          console.log(data);
        }}
        btnRef={btnRef}
      />
    </MainLayout>
  );
};

export default Ships;
