import { useQuery } from '@apollo/client';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

import { GET_SHIPS } from '@/features/ships/queries/ships.graphql';

const ShipsList = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_SHIPS);

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>Error</Box>;

  return (
    <Box mt='10' data-testid='ships-list'>
      {data?.ships?.map((ship, index) => (
        <Card key={index} mb='4'>
          <CardHeader pb='0' fontWeight='bold'>
            <Heading size='md'>{ship?.name}</Heading>
          </CardHeader>

          <CardBody>
            <Text noOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              maiores officia magnam voluptate sequi aliquid similique beatae
              neque numquam expedita minus molestiae autem ea eos, harum nobis
              error dicta quas?
            </Text>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};

export default ShipsList;
