import React, { FC } from 'react'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { Form, FormikProps } from 'formik'
import { EnumDialogStatus } from './Form'
import { SceneType } from '../../types'

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setDialogStatus: React.Dispatch<React.SetStateAction<EnumDialogStatus>>
  formik: FormikProps<SceneType>
}

export const AddSceneMain: FC<Props> = ({ setIsOpen, setDialogStatus, formik }) => {
  const locationText = formik.values.location ? formik.values.location : 'pick scene location'

  const handleClose = () => setIsOpen(false)
  const handleOpenLocation = () => setDialogStatus(EnumDialogStatus.location)
  const handleOpenCharacters = () => setDialogStatus(EnumDialogStatus.characters)
  const handleDeleteCharacterClick = name => {
    const result = formik.values.characters.filter(el => el !== name)
    formik.setFieldValue('characters', result)
  }

  return (
    <Form>
      <DialogTitle>New Scene Settings</DialogTitle>
      <DialogContent style={{ height: '639.5px' }}>
        <DialogContentText style={{ padding: 0 }}>
          Set a new Scene and click save button to save changes.
        </DialogContentText>
        <Box margin="30px 0 0 0" display="grid" gridTemplateColumns="1fr" width="560px">
          <TextField
            onBlur={formik.handleBlur}
            name="title"
            error={Boolean(formik.errors.title) && formik.touched.title}
            label="Scene Title"
            onChange={formik.handleChange}
            defaultValue={formik.values.title}
          />

          <TextField
            error={Boolean(formik.errors.description) && formik.touched.description}
            margin="normal"
            name="description"
            label="Scene Description"
            multiline
            rows={4}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            defaultValue={formik.values.description}
          />

          <Box display="flex" alignItems="center">
            <Typography variant="body2" component="div">
              Location:
            </Typography>

            <Button type="button" onClick={handleOpenLocation} variant="text">
              {locationText}
            </Button>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography variant="body2" component="div">
              Characters:
            </Typography>

            <Button type="button" onClick={handleOpenCharacters} variant="text">
              pick scene characters
            </Button>
          </Box>

          <Box margin="10px 0 0 0" display="flex" alignItems="flex-start">
            <Typography width="200px" variant="body2" component="div">
              List of characters:
            </Typography>

            <Box
              display="flex"
              flexWrap="wrap"
              height="280px"
              overflow="auto"
              padding="0 14px 5px 14px"
              border="1px solid #e0e0e0"
              width="100%"
              borderRadius="6px"
            >
              {formik.values.characters.map(el => (
                <Box key={el} display="flex" gap="5px">
                  <Typography variant="body2" component="div">
                    {el}
                  </Typography>
                  <Button
                    onClick={() => handleDeleteCharacterClick(el)}
                    size="small"
                    style={{ minWidth: '25px', height: '23px', padding: '0' }}
                    type="button"
                    variant="text"
                  >
                    x
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type="button" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit">Add</Button>
      </DialogActions>
    </Form>
  )
}
