import { ApolloProvider } from '@apollo/client';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Ships from './Ships';

import { LayoutView } from './Ships.types';

import { apolloClient } from '@/lib';

describe('ships component', () => {
  beforeEach(() => {
    render(
      <ApolloProvider client={apolloClient}>
        <Ships />
      </ApolloProvider>
    );
  });

  it('should render with list', async () => {
    await waitFor(() =>
      expect(screen.queryByTestId('ships-list')).toBeInTheDocument()
    );
  });

  it('should switch to gallery view', async () => {
    await waitFor(() =>
      expect(screen.queryByTestId('ships-list')).toBeInTheDocument()
    );

    const galleryViewBtn = screen.queryByTestId(LayoutView.GALLERY);

    expect(galleryViewBtn).toBeTruthy();

    fireEvent.click(galleryViewBtn as HTMLButtonElement);

    await waitFor(() =>
      expect(screen.queryByTestId('ships-gallery')).toBeInTheDocument()
    );
  });
});
