import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

import { ShipsListProps } from './ShipsList.types';

const ShipsList = (props: ShipsListProps): JSX.Element => {
  const { entries } = props;

  return (
    <Box mt='10' data-testid='ships-list'>
      {entries?.ships?.map((ship, index) => (
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
