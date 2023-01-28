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

  it('should render ships with list view', async () => {
    await waitFor(() => {
      expect(screen.queryByTestId('ships-list')).toBeInTheDocument();
      expect(screen.queryAllByTestId('ship')).not.toHaveLength(0);
    });
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

  it('should filter ships on form select change', async () => {
    const filterBtn = screen.queryByTestId('filter-btn');
    expect(filterBtn).toBeTruthy();
    fireEvent.click(filterBtn as HTMLButtonElement);

    await waitFor(() =>
      expect(screen.queryByTestId('filter-form')).toBeInTheDocument()
    );

    const selectShipTypeInput = screen.queryByTestId('select-ship-type-input');
    expect(selectShipTypeInput).toBeTruthy();

    fireEvent.change(selectShipTypeInput as HTMLSelectElement, {
      target: { value: 'Cargo' },
    });

    const submitBtn = screen.queryByTestId('submit-btn');
    expect(submitBtn).toBeTruthy();
    fireEvent.click(submitBtn as HTMLButtonElement);

    await waitFor(() =>
      expect(screen.queryAllByTestId('ship')).toHaveLength(1)
    );

    expect(screen.getByText('Type: Cargo')).toBeInTheDocument();
  });
});
