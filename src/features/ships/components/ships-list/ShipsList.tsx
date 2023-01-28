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
      {entries?.map((ship, index) => (
        <Card key={index} mb='4' data-testid='ship'>
          <CardHeader pb='0' fontWeight='bold'>
            <Heading size='md'>{ship?.name}</Heading>
          </CardHeader>

          <CardBody>
            {ship?.type && (
              <Text>
                <strong>Type:</strong> {ship.type}
              </Text>
            )}

            {ship?.year_built && (
              <Text>
                <strong>Year Built:</strong> {ship.year_built}
              </Text>
            )}
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};

export default ShipsList;
