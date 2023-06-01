import React from 'react'
import { useWidth } from '../hooks'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { AddScene, SceneCard } from '../components'
import { getGridTemplateColumns } from '../utils'
import { useQuery } from '@apollo/client'
import { GET_SCENES } from '../graphql/reactivities/scenes'

export const Home = () => {
  const { loading, error, data } = useQuery(GET_SCENES)

  const width = useWidth()
  const gridTemplateColumns = getGridTemplateColumns(width)

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" component="div">
            Rick and Morty scenes in the first episode of the upcoming season
          </Typography>
        </Toolbar>
      </AppBar>

      <AddScene />

      <Box margin="10px 0 0 0" gap="20px" display="grid" gridTemplateColumns={gridTemplateColumns}>
        {data.scenes.map((item, i) => (
          <SceneCard key={item.title} index={i} item={item} />
        ))}
      </Box>
    </>
  )
}
