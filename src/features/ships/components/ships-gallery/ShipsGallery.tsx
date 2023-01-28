import {
  Grid,
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  Image,
  Box,
} from '@chakra-ui/react';

import { ShipsGallerysProps } from './ShipsGallery.types';

const ShipsGallery = (props: ShipsGallerysProps): JSX.Element => {
  const { entries } = props;

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
      {entries?.map((ship) => (
        <Card key={ship?.id}>
          <CardHeader pb='0' fontWeight='bold'>
            <Heading size='md'>{ship?.name}</Heading>
          </CardHeader>

          <CardBody>
            <Box mb='2'>
              {ship?.image ? (
                <Image
                  src={ship.image}
                  h='48'
                  w='100%'
                  fit='cover'
                  referrerPolicy='no-referrer'
                />
              ) : (
                <Image
                  src='https://via.placeholder.com/600x400?text=No+Image'
                  h='48'
                  w='100%'
                  fit='cover'
                />
              )}
            </Box>

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
