import { Box, Flex, Heading } from '@chakra-ui/react';

import { MainLayoutProps } from './MainLayout.types';

const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <Flex height='100%' direction='column'>
      <Box as='nav' px='5' py='4' bg='black'>
        <Heading fontSize='4xl' color='white'>
          Space X
        </Heading>
      </Box>

      <Box
        as='main'
        overflowX='hidden'
        overflowY='scroll'
        px={[5, 5, 14]}
        py='7'
        flex='1'
      >
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
