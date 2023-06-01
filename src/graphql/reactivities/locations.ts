import { gql } from '@apollo/client'

export const GET_Locations = gql`
  query GetLocations($page: Int) {
    locations(page: $page) {
      results {
        name
        id
      }
      info {
        pages
      }
    }
  }
`
