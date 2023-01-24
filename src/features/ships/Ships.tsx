import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import { MainLayout } from '@/layouts';

import { FilterForm } from './components';

const Ships = (): JSX.Element => {
  return (
    <MainLayout>
      <Flex alignItems='center' justifyContent='space-between'>
        <Heading as='h2' size='lg'>
          Ships
        </Heading>

        <Flex alignItems='center'>
          <IconButton
            isActive
            cursor='pointer'
            aria-label='list-button'
            padding='2'
            as={IoListOutline}
          />
          <IconButton
            cursor='pointer'
            aria-label='gallery-icon-button'
            padding='2'
            ml='3'
            as={IoGridOutline}
          />
        </Flex>

        <FilterForm />
      </Flex>
    </MainLayout>
  );
};

export default Ships;
