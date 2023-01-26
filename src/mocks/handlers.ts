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
            status: '',
            type: 'Tug',
            weight_kg: null,
            year_built: 1976,
            model: null,
            name: 'American Champion',
            __typename: 'Ship',
          },
          {
            id: '5ea6ed2d080df4000697c902',
            image: 'https://i.imgur.com/jmj8Sh2.jpg',
            status: '',
            type: 'Cargo',
            weight_kg: null,
            year_built: null,
            model: null,
            name: 'American Islander',
            __typename: 'Ship',
          },
        ],
      })
    );
  }),
];

export default handlers;
