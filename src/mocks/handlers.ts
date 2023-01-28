import { graphql } from 'msw';

import { GetShipsDocument, GetShipsQuery } from '@/lib/generated/graphql';

const handlers = [
  graphql.query<GetShipsQuery>(GetShipsDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        ships: [
          {
            id: '5ea6ed2d080df4000697c901',
            image: 'https://i.imgur.com/woCxpkj.jpg',
            type: 'Tug',
            year_built: 1976,
            name: 'American Champion',
            __typename: 'Ship',
          },
          {
            id: '5ea6ed2d080df4000697c902',
            image: 'https://i.imgur.com/jmj8Sh2.jpg',
            type: 'Cargo',
            year_built: null,
            name: 'American Islander',
            __typename: 'Ship',
          },
        ],
      })
    );
  }),
];

export default handlers;
