import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

const ShipsList = (): JSX.Element => {
  const ships = [1, 2, 3, 4, 5];

  return (
    <Box mt='10'>
      {ships.map((ship, index) => (
        <Card key={index} mb='4'>
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
    </Box>
  );
};

export default ShipsList;
