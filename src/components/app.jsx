import React from 'react';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';

import SampleQuery from "./sample-query";

const App = (props) => {

    const cache = new InMemoryCache();
    const link = new HttpLink({
        uri: 'http://localhost:4000/',
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
            <SampleQuery />
        </ApolloProvider>
    );
};

export default App;
