import { gql, makeVar } from '@apollo/client'

export const scenes = makeVar([])

export const GET_SCENES = gql`
  query getDarkMode {
    scenes @client
  }
`
