import { ApolloProvider } from '@apollo/client';

import { Ships } from '@/features';

import { apolloClient } from '@/lib';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <Ships />
    </ApolloProvider>
  );
};

export default App;
