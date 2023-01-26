import { useState } from 'react';

import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { MainLayout } from '@/layouts';

import { FilterForm, ShipsList, ShipsGallery } from './components';

import { LayoutView } from './Ships.types';

const Ships = (): JSX.Element => {
  const [selectedView, setSelectedView] = useState(LayoutView.LIST);

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
              data-selected-view={selectedView}
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

        <FilterForm />
      </Flex>

      {selectedView === LayoutView.LIST ? <ShipsList /> : <ShipsGallery />}
    </MainLayout>
  );
};

export default Ships;
