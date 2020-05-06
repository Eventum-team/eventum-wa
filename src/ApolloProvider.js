import React from 'react';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks'
import {ipApiGetway} from './server'

const cache = new InMemoryCache()


const client = new ApolloClient({
  uri: process.env.GATEWAY_URL || ipApiGetway, cache
});

/*
const client = new ApolloClient({
  uri: process.env.GATEWAY_URL || 'http://localhost:5000/graphql', cache
});
*/
cache.writeData({  data: {
  token: '',
  type: 0,
  profile: false
 }});


export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
