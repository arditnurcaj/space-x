import { ApolloProvider } from '@apollo/client';

import { Ships } from '@/features';

import { MainLayout } from '@/layouts';

import { apolloClient } from '@/lib';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <MainLayout>
        <Ships />
      </MainLayout>
    </ApolloProvider>
  );
};

export default App;
