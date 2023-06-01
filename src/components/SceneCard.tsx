import React, { FC, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Form } from './form'
import { scenes } from '../graphql'
import { SceneType } from '../types'

type Props = {
  item: SceneType
  index: number
}

export const SceneCard: FC<Props> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => setIsOpen(true)

  const onSubmit = values => {
    const result = scenes().map((el, i) => {
      if (i === index) {
        return values
      }
      return el
    })

    scenes(result)
    setIsOpen(false)
  }

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>

          <Box margin="20px 0 0 0" display="grid" gridTemplateColumns="160px auto">
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Location:
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.location}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Characters Amount:
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.characters.length}
            </Typography>
          </Box>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">
            change
          </Button>
        </CardActions>
      </Card>

      <Form onSubmit={onSubmit} state={[isOpen, setIsOpen]} initialValues={item} />
    </Box>
  )
}
