import {
  Grid,
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
} from '@chakra-ui/react';

const ShipsGallery = (): JSX.Element => {
  const ships = [1, 2, 3, 4, 5];

  return (
    <Grid
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
      {ships.map((ship, index) => (
        <Card key={index}>
          <CardHeader pb='0' fontWeight='bold'>
            <Heading size='md'>Ship {ship}</Heading>
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
    </Grid>
  );
};

export default ShipsGallery;
