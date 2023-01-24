import { Box, Heading } from '@chakra-ui/react';

import { MainLayoutProps } from './MainLayout.types';

const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <Box height='100%'>
      <Box as='nav' px='5' py='4' bg='black'>
        <Heading fontSize='4xl' color='white'>
          Space X
        </Heading>
      </Box>

      <Box as='main' overflowX='hidden' overflowY='scroll' px='14' py='7'>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
