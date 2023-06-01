import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Form } from './form'
import { scenes } from '../graphql'

export const AddScene = () => {
  const [isOpen, setIsOpen] = useState(false)

  const initialValues = {
    title: '',
    description: '',
    location: '',
    characters: [],
  }

  const onSubmit = values => {
    scenes([...scenes(), values])
    setIsOpen(false)
  }

  return (
    <>
      <Button
        style={{ margin: '20px 0', height: '40px' }}
        fullWidth={true}
        onClick={() => setIsOpen(true)}
        variant="contained"
      >
        add new scene
      </Button>

      <Form onSubmit={onSubmit} initialValues={initialValues} state={[isOpen, setIsOpen]} />
    </>
  )
}
