import React from 'react';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';

import CreateLink from "./CreateLink";
import Links from "./Links";

interface AppProps {
  compiler: string;
  framework: string;
}

const App = (props: AppProps) => {

  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:7777/',
  });


  const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    link: link,

    // Provide some optional constructor fields
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    }
  });

  return (
    <ApolloProvider client={client}>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <CreateLink />
      <Links />
    </ApolloProvider>
  );
};

export default App;
