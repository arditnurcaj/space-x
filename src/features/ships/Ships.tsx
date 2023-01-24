import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { MainLayout } from '@/layouts';

import { FilterForm, ShipsList, ShipsGallery } from './components';

import { LayoutView } from './Ships.types';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "AUD") {
      currency
      rate
    }
  }
`;

const Ships = (): JSX.Element => {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  const [selectedView, setSelectedView] = useState(LayoutView.LIST);

  if (loading) {
    console.log('loading...');
  } else if (error) {
    console.log('error...');
  } else {
    console.log(data.rates);
  }

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
