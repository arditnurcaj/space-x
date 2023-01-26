import { useQuery } from '@apollo/client';

import {
  Grid,
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  Box,
} from '@chakra-ui/react';

import { GET_SHIPS } from '@/features/ships/queries/ships.graphql';

const ShipsGallery = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_SHIPS);

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>Error</Box>;

  return (
    <Grid
      data-testid='ships-gallery'
      gap='4'
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      mt='14'
    >
      {data?.ships?.map((ship) => (
        <Card key={ship?.id}>
          <CardHeader pb='0' fontWeight='bold'>
            <Heading size='md'>{ship?.name}</Heading>
          </CardHeader>

          <CardBody>
            {ship?.image && <img src={ship?.image} />}

            <Text noOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              maiores officia magnam voluptate sequi aliquid similique beatae
              neque numquam expedita minus molestiae autem ea eos, harum nobis
              error dicta quas?
            </Text>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

export default ShipsGallery;
