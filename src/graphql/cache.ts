import { InMemoryCache } from '@apollo/client'
import { scenes } from './reactivities/scenes'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        scenes: {
          read() {
            return scenes()
          },
        },
      },
    },
  },
})
