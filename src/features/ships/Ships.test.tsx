import { ApolloProvider } from '@apollo/client';
import { render, screen, waitFor } from '@testing-library/react';

import Ships from './Ships';

import { apolloClient } from '@/lib';

describe('ships component', () => {
  it('should render with list', async () => {
    render(
      <ApolloProvider client={apolloClient}>
        <Ships />
      </ApolloProvider>
    );

    await waitFor(() =>
      expect(screen.queryByTestId('ships-list')).toBeInTheDocument()
    );
  });
});
