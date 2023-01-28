import { Flex, Spinner } from '@chakra-ui/react';

const CustomSpinner = () => {
  return (
    <Flex height='100%' alignItems='center' justifyContent='center'>
      <Spinner size='lg' />
    </Flex>
  );
};

export default CustomSpinner;
