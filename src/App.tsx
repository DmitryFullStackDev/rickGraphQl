import { RouterProvider } from 'react-router-dom'
import { router } from './constants'
import * as React from 'react'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { cache } from './graphql/cache'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.graphcdn.app/',
  cache,
})

export const App = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
